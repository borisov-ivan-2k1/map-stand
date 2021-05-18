import { takeLatest, takeLeading, call, put } from 'redux-saga/effects';
import { 
  GET_THEMES, 
  setThemes, 
  GET_EVENTS, 
  setEvents, 
  setThemesLoading, 
  setShowSearch, 
  GET_CITIES, 
  setCities, 
  GET_DOTES, 
  setDotes,
  GET_BORDERS,
  setBorders,

  INIT_MAP,
  clearInfoblockData,
  setSearch,
  setActiveTheme,
  setInfoblocks
} from './actions';
import { getThemes, getEvents, getCities, getDotesRequest, getBorders, getThemeById } from '../../utils/requests/map.api';

function* getThemesSaga(action) {
  try {
    yield put(setShowSearch(true));
    const response = yield call(getThemes, action.payload);
    yield put(setThemes(response.data));
    yield put(setThemesLoading(false));
  } catch (e) {
    console.error('get search data error ',e);
  }
}

function* getEventsSaga(action) {
  try {
    const { themeId, currentYear } = action.payload;
    const response = yield call(getEvents, themeId, currentYear);
    yield put(setEvents(response.data));
    yield put(setShowSearch(false));
  } catch (e) {
    console.error(`get events b theme id <${action.payload}> error ${e}`);
  }
}

function* getCitiesSaga(action) {
  try {
    const response = yield call(getCities, action.payload);
    yield put(setCities(response.data));
  } catch (e) {
    console.error('get cities error', e);
  }
}

function* getDotesSaga() {
  try {
    const response = yield call(getDotesRequest);
    yield put(setDotes(response.data));
  } catch (e) {
    console.error('get cities error', e);
  }
}

function* getBordersSaga(action) {
  try {
    const response = yield call(getBorders, action.payload);
    yield put(setBorders(response.data));
  } catch (e) {
    console.error('get cities error', e);
  }
}

function* initMapSaga(action) {
  try {
    yield put(clearInfoblockData()); // мб не надо???
    const { themeId } = action.payload;
    if (themeId) {
      const response = yield call(getThemeById, themeId);
      yield put(setSearch(response.data.title));
      yield put(setActiveTheme(response.data));
      yield put(setInfoblocks(response.data))
    }
    
  

  //   clearInfoblockData,
  // setSearch,
  // setActiveTheme,
  // setInfoblocks

  } catch (e) {
    console.error('init map error');
  }
}

const map = function* () {
  yield takeLatest(GET_THEMES, getThemesSaga);
  yield takeLeading(GET_EVENTS, getEventsSaga);
  yield takeLatest(GET_CITIES, getCitiesSaga);
  yield takeLeading(GET_DOTES, getDotesSaga);
  yield takeLatest(GET_BORDERS, getBordersSaga);
  yield takeLeading(INIT_MAP, initMapSaga);
}

export default map;