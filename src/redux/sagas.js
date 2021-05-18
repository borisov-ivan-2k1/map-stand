import { all } from 'redux-saga/effects';
import map from './map/saga';

function* rootSaga() {
  yield all([
    map(),
  ])
}

export default rootSaga;