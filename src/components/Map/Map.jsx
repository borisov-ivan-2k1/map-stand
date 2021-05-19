import React, { useState, useEffect } from 'react';
import hexToRgba from 'hex-to-rgba';
import { Map as LeafletMap, TileLayer, Marker, Tooltip, LayerGroup, GeoJSON, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-arrowheads';

import { mapStateToProps, mapDispatchToProps } from './Map.index';
import 'leaflet/dist/leaflet.css';
import { eventIcons, PAST_EVENTS } from '../../utils/constants';
import { getEventIconSize } from '../../utils/utils';

import './Map.scss';
import { connect } from 'react-redux';

import { GeoJSONFillable, Patterns} from 'react-leaflet-geojson-patterns';

import '../../utils/arrows/leaflet-thickarrows';


const MapPresenter = ({
  events,
  setActiveEvent,
  mapPosition,
  mapZoom,
  activeTheme,
  setMapPosition,
  setMapZoom,
  excludedTypes,
  setInfoblocks,
  setInfoblockId,
  cities,
  dotes,
  getDotes,
  borders,
  currentYear,
}) => {

  const [zoom, setZoom] = useState(4)

  useEffect(() => {
    if (activeTheme) {
      setMapPosition(activeTheme.position);
      setMapZoom(activeTheme.zoom || 4); 
    }
  }, [activeTheme]);

  useEffect(() => getDotes(), []);

  const [showMove, setShowMove] = useState(true);
  useEffect(() => {
    setShowMove(() => false)
  }, [currentYear, zoom]);
  useEffect(() => {
    if (!showMove) setShowMove(() => true)
  } , [showMove])

  const mapMinZoom = 3;
  const mapMaxZoom = 7;
  const crs = L.CRS.EPSG3857;

  return (
    <LeafletMap
      maxBoundsViscosity={1}
      worldCopyJump={false}
      className='Map'
      id='map'
      maxBounds={[[85, -180], [85, 180], [-85, -180], [-85, 180]]}
      scrollWheelZoom={false}
      center={mapPosition}
      zoom={mapZoom}
      crs={crs}
      maxZoom={mapMaxZoom}
      minZoom={mapMinZoom}
      zoomAnimation={true}
      animate={true}
      onzoomend={(e) => setZoom(e.target._zoom)}
      onclick={e => console.log([e.latlng.lat, e.latlng.lng])}
    >
      <TileLayer
        pane='tilePane'
        noWrap={true}
        minZoom={mapMinZoom}
        maxZoom={mapMaxZoom}
        tms={false}
        url="https://schoolatlas.ru/img/tiles/{z}/{x}/{y}.png"
      />

     

      {(!!cities.length && zoom >= 5) && cities.map((city) => {

        if (city.minShowZoom ? city.minShowZoom > zoom : false) return null;

        const iconPerson = new L.Icon({
          iconUrl: eventIcons['city'],
          iconRetinaUrl: eventIcons['city'],
          iconSize: 5 + (zoom - 3),
        });

        return ( 
          <Marker pane='markerPane' key={city._id} icon={iconPerson} position={city.position}>
            <Tooltip className={'Map-Cities-Tooltip'} permanent={true} direction='top' >
              <div>{city.title}</div>
            </Tooltip>
          </Marker>
        )
      })}

      <LayerGroup pane='overlayPane' >
        {(!!borders.length) && borders.map((border) => {
          if ((!!excludedTypes && excludedTypes.includes(border.legendType))) return null;

          const Component = border.stripe ? GeoJSONFillable : GeoJSON;
          const styles = border.stripe ? (feature) => ({ fillPattern: Patterns.StripePattern({ weight: 10, spaceWeight: 20, fill: true, width: 20, height: 20, color: border.fillColor, key: border._id, spaceOpacity: 1, spaceColor: border.stripeColor || '#fff', angle: 45 })}) : undefined;
          return <>
            <Component   
              
              renderer={L.svg({ padding: 0.8 })}
              smoothFactor={2}
              weight={border.weight}
              color={border.color}
              opacity={border.opacity}
              fillColor={border.fillColor}
              fillOpacity={border.fillOpacity}
              data={border.data}
              key={border._id}
              style={styles}
            />
            {border.imageUrl && border.bounds && <ImageOverlay
              pane='markerPane'
              url={border.imageUrl}
              bounds={border.bounds}
              key={`name-${border._id}`}
              opacity={border.opacity || 1}
            />}
          </>
        })}
      </LayerGroup>


      {!!events.length && events.map(el => {
        const hideEvent = (
          (!!excludedTypes && excludedTypes.includes(el.legendType)) ||
          (el.minShowZoom ? el.minShowZoom > zoom : false)
        );
        if (hideEvent) return null;
        const isCurrentEvent = el.yearStart <= currentYear && el.yearEnd >= currentYear;
        if (!excludedTypes?.includes(PAST_EVENTS) && !isCurrentEvent) return null;
        const cls = ['Map-Event'];
        if (!isCurrentEvent) cls.push('Map-Event-Past');

        if (el.type === 'troopMovement' && showMove) {
          const size = `${5 +(Math.pow(zoom - 3, 2))}px`
          return <GeoJSON 
          pane='popupPane' 
          smoothFactor={2} 
          className={cls.join(' ')}
          key={el._id} data={el.data.data} 
          weight={-1 + zoom} 
          color={el.data.color} 
          style={{opacity: 0, zIndex: 9999}}
          thickArrows={{arrow: {color: el.data.color, opacity: 0.3, fillColor: el.data.color, fillOpacity: isCurrentEvent ? 1 : 0.3, pane: 'markerPane' }, head: {size: 5 +(Math.pow(zoom - 3, 2)), yawn: 60}, weight: 5 +(Math.pow(zoom - 3, 2))}}
          // thickArrows={{arrow: {color: el.data.color, fillColor: el.data.color, fillOpacity: 1}}}
          >
            <Tooltip direction='top' >
              <div>{el.title}</div>
            </Tooltip>
          </GeoJSON>
        }

        const iconPerson = new L.Icon({
          iconUrl: eventIcons[el.iconType],
          iconRetinaUrl: eventIcons[el.iconType],
          iconSize: getEventIconSize(zoom),
          className: cls.join(' '),
        });

        return (
          <Marker pane='tooltipPane' zIndexOffset style={{opacity: 0.3, zIndex: 99}} onclick={() => {
            setInfoblocks(el);
            setInfoblockId(el._id);
          }} key={el._id} icon={iconPerson} position={el.position}>
            <Tooltip pane='popupPane' direction='top' >
              <div>{el.title}</div>
            </Tooltip>
          </Marker>
        )
      })}

    </LeafletMap>
  )
}

export const Map = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPresenter);