import { combineReducers } from 'redux';
import { mapReducer as map } from './map/reducer';

export const rootReducer = combineReducers({
  map,
});