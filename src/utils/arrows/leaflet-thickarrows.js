import L from "leaflet";
import {LeafletThickArrowsDraw} from './leaflet-thickarrows-draw'

let saved_Polyline_addTo = L.Polyline.prototype.addTo;
let saved_Polyline__update = L.Polyline.prototype._update;
let saved_Polyline_remove = L.Polyline.prototype.remove;

L.Polyline.include({
    thickArrows: function (options = {}) {
        this.options.noClip = true;
        this._thickArrowsDraw = new LeafletThickArrowsDraw(options);
        return this;
    },

    drawThickArrows: function () {
        if (this._thickArrows) {
            this._thickArrows.remove();
        }

        let layers = this._thickArrowsDraw.draw(this._map, this._parts);
        this._thickArrows = L.layerGroup(layers);
        return this;
    },

    getThickArrows: function () {
        if (this._thickArrows) {
            return this._thickArrows;
        } else {
            return console.log(
                `Error: You tried to call '.getThickArrows() on a shape that does not have a thickArrows.  Use '.thickArrows()' to add a thickArrows before trying to call '.getThickArrows()'`
            );
        }
    },

    deleteThickArrows: function () {
        if (this._thickArrows) {
            this._thickArrows.remove();
            delete this._thickArrows;
            this._thickArrowsDraw = null;
            delete this._thickArrowsDraw;
        }
    },

    addTo: function (map) {
        saved_Polyline_addTo.apply(this, arguments);
        if (this._thickArrowsDraw) {
            this.drawThickArrows();
            this._thickArrows.addTo(this._map);
        }
        return this;
    },

    _update: function () {
        saved_Polyline__update.apply(this, arguments);
        if (this._thickArrowsDraw) {
            this.drawThickArrows();
            this._map.addLayer(this._thickArrows);
        }
        return this;
    },

    remove: function () {
        if (this._thickArrows) {
            this._thickArrows.remove();
        }
        saved_Polyline_remove.apply(this, arguments);
        return this;
    }
});

let saved_LayerGroup_removeLayer = L.LayerGroup.prototype.removeLayer;
let saved_LayerGroup_onRemove = L.LayerGroup.prototype.onRemove;

L.LayerGroup.include({
    removeLayer: function (layer) {
        var id = layer in this._layers ? layer : this.getLayerId(layer);

        if (this._map && this._layers[id]) {
            if (this._layers[id]._thickArrows) {
                this._layers[id]._thickArrows.remove();
            }
        }

        saved_LayerGroup_removeLayer.apply(this, arguments);
        return this;
    },

    onRemove: function (map, layer) {
        if (layer in this._layers) {
            if (this._layers[layer]) {
                this._layers[layer].remove();
            }
        }
        saved_LayerGroup_onRemove.apply(this, arguments);
    }
});

let saved_Map_removeLayer = L.Map.prototype.removeLayer;

L.Map.include({
    removeLayer: function (layer) {
        if (layer._thickArrows) {
            layer._thickArrows.remove();
        }

        saved_Map_removeLayer.apply(this, arguments)
        return this;
    },
});

let saved_GeoJSON_geometryToLayer = L.GeoJSON.geometryToLayer;

L.GeoJSON.include({
    geometryToLayer: function (geojson, options) {
        const figure = saved_GeoJSON_geometryToLayer.apply(this, arguments);
        const geometry = geojson.type === 'Feature' ? geojson.geometry : geojson;
        if (!geometry || !figure) {
            return figure;
        }
        switch (geometry.type) {
            case 'LineString':
            case 'MultiLineString':
                if (options.thickArrows) {
                    figure.thickArrows(options.thickArrows);
                }
        }
        return figure;
    },
    addData: function (geojson) {
        var features = L.Util.isArray(geojson) ? geojson : geojson.features,
            i,
            len,
            feature;

        if (features) {
            for (i = 0, len = features.length; i < len; i++) {
                // only add this if geometry or geometries are set and not null
                feature = features[i];
                if (
                    feature.geometries ||
                    feature.geometry ||
                    feature.features ||
                    feature.coordinates
                ) {
                    this.addData(feature);
                }
            }
            return this;
        }

        var options = this.options;

        if (options.filter && !options.filter(geojson)) {
            return this;
        }

        var layer = this.geometryToLayer(geojson, options);
        if (!layer) {
            return this;
        }
        layer.feature = L.GeoJSON.asFeature(geojson);

        layer.defaultOptions = layer.options;
        this.resetStyle(layer);

        if (options.onEachFeature) {
            options.onEachFeature(geojson, layer);
        }

        return this.addLayer(layer);
    }
});
