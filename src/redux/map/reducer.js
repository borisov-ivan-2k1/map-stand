import {
  SET_SEARCH,
  SET_THEMES,
  SET_ACTIVE_THEME,
  SET_EVENTS,
  SET_THEMES_LOADING,
  SET_SHOW_SEARCH,
  SET_CURRENT_YEAR,
  SET_ACTIVE_EVENT,
  SET_MAP_POSITION,
  SET_MAP_ZOOM,
  LEGEND_EXLUDE_TYPE,
  SET_INFOBLOCKS,
  SET_INFOBLOCK_ID,
  CLOSE_INFOBLOCK,
  CLEAR_INFOBLOCK_DATA,
  SET_CITIES,
  SET_DOTES,
  SET_BORDERS
} from './actions';

const baseState = {
  search: '',
  showSearch: false,
  data: [],
  activeTheme: null,
  events: [],
  activeEvent: {},
  themesLoading: false,
  currentYear: new Date().getFullYear(),
  mapZoom: 3,
  mapPosition: [51.505, -0.09],
  excludedTypes: [],
  infoblocks: {},
  infoblocksIds: [],
  infoblockId: '',
  cities: [],
  dotes: [],
  borders: [],
}

export const mapReducer = (state = baseState, action) => {
  switch (action.type) {

    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload
      }
    }

    case SET_SHOW_SEARCH: {
      return {
        ...state,
        showSearch: action.payload
      }
    }

    case SET_THEMES: {
      return {
        ...state,
        data: action.payload
      }
    }

    case SET_ACTIVE_THEME: {
      return {
        ...state,
        activeTheme: action.payload,
        currentYear: action.payload.yearStart,
        excludedTypes: []
      }
    }

    case SET_THEMES_LOADING: {
      return {
        ...state,
        themesLoading: action.payload
      }
    }

    case SET_EVENTS: {
      return {
        ...state,
        events: action.payload
      }
    }

    case SET_ACTIVE_EVENT: {
      return {
        ...state,
        activeEvent: action.payload
      }
    }

    case SET_CURRENT_YEAR: {
      return {
        ...state,
        currentYear: action.payload
      }
    }

    case SET_MAP_POSITION: {
      return {
        ...state,
        mapPosition: action.payload
      }
    }

    case SET_MAP_ZOOM: {
      return {
        ...state,
        mapZoom: action.payload
      }
    }

    case LEGEND_EXLUDE_TYPE: {
      return {
        ...state,
        excludedTypes: state.excludedTypes.includes(action.payload) ? 
        state.excludedTypes.filter(type => type !== action.payload) :
        [...state.excludedTypes, action.payload]
      }
    }

    case SET_INFOBLOCKS: {
      return {
        ...state,
        infoblocks: {
          ...state.infoblocks, 
          [action.payload._id]: action.payload
        },
        infoblocksIds: state.infoblocksIds.includes(action.payload._id) ? state.infoblocksIds : [...state.infoblocksIds, action.payload._id]
      } 
    }

    case SET_INFOBLOCK_ID: {
      return {
        ...state,
        infoblockId: action.payload
      }
    }

    case CLOSE_INFOBLOCK: {
      return {
        ...state,
        infoblocksIds: state.infoblocksIds.filter(id => id !== action.payload)
      }
    }

    case CLEAR_INFOBLOCK_DATA: {
      return {
        ...state,
        infoblocks: baseState.infoblocks,
        infoblocksIds: baseState.infoblocksIds,
        infoblockId: baseState.infoblockId
      }
    }

    case SET_CITIES: {
      return {
        ...state,
        cities: action.payload
      }
    }

    case SET_DOTES: {
      return {
        ...state,
        dotes: action.payload
      }
    }

    case SET_BORDERS: {
      return {
        ...state,
        borders: action.payload
      }
    }
   
    default:
      return state;
  }
} 