import { bindActionCreators } from 'redux';
import { initMap } from '../../redux/map/actions';

export const mapStateToProps = (state) => ({
  infoblockId: state.map.infoblockId
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  initMap
}, dispatch);