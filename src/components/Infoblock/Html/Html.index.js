import { bindActionCreators } from 'redux';

export const mapStateToProps = (state) => ({
  data: state.map.infoblocks[state.map.infoblockId]
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  
}, dispatch);