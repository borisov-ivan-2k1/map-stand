import { bindActionCreators } from 'redux';
import { setSearch, getThemes, getEvents, setThemesLoading, setActiveTheme, setInfoblocks, setInfoblockId, clearInfoblockData } from '../../redux/map/actions';

export const mapStateToProps = (state) => {
  return {
    search: state.map.search,
    data: state.map.data,
    loading: state.map.themesLoading,
    showSearch: state.map.showSearch
  }
}

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSearch,
  getThemes,
  getEvents,
  setThemesLoading,
  setActiveTheme,
  setInfoblocks,
  setInfoblockId,
  clearInfoblockData
}, dispatch);