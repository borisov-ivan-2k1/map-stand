import { bindActionCreators } from 'redux';
import { setActiveEvent, setMapPosition, setMapZoom, setInfoblocks, setInfoblockId, getDotes } from '../../redux/map/actions';

export const mapStateToProps = (state) => ({
  events: state.map.events,
  mapPosition: state.map.mapPosition,
  mapZoom: state.map.mapZoom,
  activeTheme: state.map.activeTheme,
  excludedTypes: state.map.excludedTypes,
  cities: state.map.cities,
  dotes: state.map.dotes,
  borders: state.map.borders,
  infoblockId: state.map.infoblockId,
  currentYear: state.map.currentYear
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActiveEvent,
  setMapPosition,
  setMapZoom,
  setInfoblocks,
  setInfoblockId,
  getDotes
}, dispatch);
