import { bindActionCreators } from 'redux';
import { getEvents, setCurrentYear, getCities, getBorders } from '../../redux/map/actions';

export const mapStateToProps = (state) => {
  return {
    activeTheme: state.map.activeTheme,
    currentYear: state.map.currentYear
  }
}

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getEvents,
  setCurrentYear,
  getCities,
  getBorders
}, dispatch);