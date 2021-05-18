import L from "leaflet";
import "leaflet-geometryutil";
import * as turf from '@turf/turf'
import {toLatLng} from "leaflet/src/geo/LatLng";

export class LeafletThickArrowsDraw {

    constructor(options) {
        // Merge user input options with default options:
        const defaults = {
            arrow: {},
            head: {
                yawn: 60,
                size: 20
            },
            tailWidth: 10000,
            headWidth: 4000,
        };
        this.precision = 16;
        this.options = Object.assign({}, defaults, options);
    }

    draw(map, parts) {
        let options = this.options;
        let layers = [];

        let kilometersPerPixel = this.getKilometersPerPixel(map);
        const tailWidth = options.tailWidth * kilometersPerPixel;
        const headWidth = options.headWidth * kilometersPerPixel;
        parts.forEach((path, index) => {
            if(path.length > 1) {
                let latLngPath = [];
                path.forEach((point) => latLngPath.push(map.layerPointToLatLng(point)));

                // up and down - arrow body lines
                let [angle, up, down] = this.calcArrowBody(map, latLngPath, tailWidth, headWidth);

                // up = this.smoothLine(map, up, latLngPath);
                // down = this.smoothLine(map, down, latLngPath);

                // draw hat
                const [hatPoints, leftWingPoint, rightWingPoint] = this.calcHatPoints(map, options, angle, latLngPath[latLngPath.length-1]);

                // intersection points of hat and arrow
                const hatCross = L.polyline([[leftWingPoint.lat, leftWingPoint.lng], [rightWingPoint.lat, rightWingPoint.lng]]);
                let upIntersect = turf.intersect(hatCross.toGeoJSON(), L.polyline(up).toGeoJSON());
                let downIntersect = turf.intersect(hatCross.toGeoJSON(), L.polyline(down).toGeoJSON());

                // filter points inside hat
                [up, upIntersect] = this.filterPointsInHat(up, upIntersect);
                [down, downIntersect] = this.filterPointsInHat(down, downIntersect);

                up.reverse()

                let arrow = Array.prototype.concat(hatPoints, upIntersect, up, [up[up.length-1], down[0]], down, [down[down.length-1]], downIntersect);
                layers.push(L.polygon(arrow, options.arrow));
            }
        });
        return layers;
    }

    calcHatPoints(map, options, angle, tip) {
        let sizePixels = options.head.size;
        let bearing = 180.0 + angle;
        let thetaLeft =
            (180 - bearing - options.head.yawn / 2) * (Math.PI / 180),
            thetaRight =
                (180 - bearing + options.head.yawn / 2) * (Math.PI / 180);

        let dxLeft = sizePixels * Math.sin(thetaLeft),
            dyLeft = sizePixels * Math.cos(thetaLeft),
            dxRight = sizePixels * Math.sin(thetaRight),
            dyRight = sizePixels * Math.cos(thetaRight);

        let derivedXY = map.latLngToLayerPoint(tip);
        let leftWingXY = {
            x: derivedXY.x + dxLeft,
            y: derivedXY.y + dyLeft,
        };
        let rightWingXY = {
            x: derivedXY.x + dxRight,
            y: derivedXY.y + dyRight,
        };

        let leftWingPoint = map.layerPointToLatLng(leftWingXY),
            rightWingPoint = map.layerPointToLatLng(rightWingXY);

        let hatPoints = [
            [leftWingPoint.lat, leftWingPoint.lng],
            [tip.lat, tip.lng],
            [rightWingPoint.lat, rightWingPoint.lng]
        ];

        return [hatPoints, leftWingPoint, rightWingPoint]
    }

    latLngToCoords(latLng) {
        // return [lat, lng]. (!) native latLngToCoords return [lng, lat] (reversed)
        return [L.Util.formatNum(latLng.lat, this.precision), L.Util.formatNum(latLng.lng, this.precision)];
    }

    filterPointsInHat(line, intersect) {
        if (intersect) {
            intersect = toLatLng(intersect.geometry.coordinates.reverse());
            let latDirection = Math.sign(line[line.length - 1].lat - intersect.lat);
            let lngDirection = Math.sign(line[line.length - 1].lng - intersect.lng);
            line = line.filter((latLng) => (latLng.lat - intersect.lat) * latDirection < 0 || (latLng.lng - intersect.lng) * lngDirection < 0);
        } else {
            intersect = [];
        }
        return [line, intersect];
    }

    getKilometersPerPixel(map) {
        const equatorLength = 40075.016686;
        return equatorLength * Math.abs(Math.cos(map.getCenter().lat * Math.PI/180)) / Math.pow(2, map.getZoom()+8);
    }

    smoothLine(map, line, original) {
        let prev;
        line.forEach((latLng, index) => {
            let current = map.latLngToLayerPoint(latLng, this.precision)
            if(prev) {
                let deltaX = Math.abs(prev.x - current.x);
                let deltaY = Math.abs(prev.y - current.y);
                if((deltaX > 0 && deltaY > 0) && (deltaX < 4 || deltaY < 4) && (deltaX/deltaY <= 0.2 || deltaY/deltaX <= 0.2)) {
                    let newLatLng = map.layerPointToLatLng(new L.Point(current.x/2 + prev.x/2, current.y/2 + prev.y/2));
                    line[index] = newLatLng;
                }
            }

            prev = current;
        });

        return line;
    }

    calcArrowBody(map, latLngPath, tailWidth, headWidth) {
        let angle;
        let up = [];
        let down = [];
        let width = tailWidth;
        let widthStep = (tailWidth - headWidth) / map.distance(latLngPath[0], latLngPath[latLngPath.length-1]);
        let prevPart = latLngPath[0];
        angle = L.GeometryUtil.angle(map, latLngPath[0], latLngPath[1]);
        latLngPath.forEach((latLng, index) => {
            if (index>0) {
                angle = L.GeometryUtil.angle(map, latLngPath[index-1], latLngPath[index]);
                width -= widthStep * map.distance(latLngPath[index-1], latLngPath[index])
            }
            let upPoint = L.GeometryUtil.destination(latLng, angle + 90, width)
            up.push(upPoint);
            down.push(L.GeometryUtil.destination(upPoint, angle - 90, width*2));
            prevPart = latLng;
        });

        return [angle, up, down];
    }
}
