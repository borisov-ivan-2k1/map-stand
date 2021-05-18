import { bindActionCreators } from 'redux';
import { setActiveEvent, setInfoblockId, closeInfoblock } from '../../redux/map/actions';

export const mapStateToProps = (state) => {
  return {
    events: state.map.events,
    activeEvent: state.map.activeEvent,
    activeTheme: state.map.activeTheme,
    infoblocks: state.map.infoblocks,
    infoblocksIds: state.map.infoblocksIds,
    infoblockId: state.map.infoblockId
  }
}

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setActiveEvent,
  setInfoblockId,
  closeInfoblock,
}, dispatch);