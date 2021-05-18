import { bindActionCreators } from 'redux';
import { exludeLegendType } from '../../redux/map/actions';

export const mapStateToProps = (state) => {
  return {
    legend: state.map?.activeTheme?.legend,
    excludedTypes: state.map.excludedTypes
  }
}

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  exludeLegendType
}, dispatch);