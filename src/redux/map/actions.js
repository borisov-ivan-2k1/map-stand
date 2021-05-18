export const INIT_MAP = 'INIT_MAP';

export const SET_SEARCH = 'SEARCH/SET_SEARCH';
export const SET_SHOW_SEARCH = 'SET_SHOW_SEARCH';

export const GET_THEMES = 'GET_THEMES';
export const SET_THEMES = 'SET_THEMES'; 
export const SET_THEMES_LOADING = 'SET_THEMES_LOADING';
export const SET_ACTIVE_THEME = 'SET_ACTIVE_THEME';

export const GET_EVENTS = 'GET_EVENTS';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_ACTIVE_EVENT = 'SET_ACTIVE_EVENT';

export const SET_INFOBLOCKS = 'SET_INFOBLOCKS';
export const SET_INFOBLOCK_ID = 'SET_INFOBLOCK_ID';
export const CLOSE_INFOBLOCK = 'CLOSE_INFOBLOCK';
export const CLEAR_INFOBLOCK_DATA = 'CLEAR_INFOBLOCK_DATA';

export const SET_CURRENT_YEAR = 'SET_CURRENT_YEAR';

export const SET_MAP_POSITION = 'SET_MAP_POSITION';
export const SET_MAP_ZOOM = 'SET_MAP_ZOOM';

export const LEGEND_EXLUDE_TYPE = 'LEGEND_EXLUDE_TYPE';

export const GET_CITIES = 'GET_CITIES';
export const SET_CITIES = 'SET_CITIES';

export const GET_DOTES = 'GET_DOTES';
export const SET_DOTES = 'SET_DOTES';

export const GET_BORDERS = 'GET_BORDERS';
export const SET_BORDERS = 'SET_BORDERS';

/**
 * init map data
 * @param {} payload init props
 */
export const initMap = payload => ({
  type: INIT_MAP,
  payload
})

/**
 * @param {string} payload 
 */
export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload
})

/**
 * set is show search result
 * @param {boolean} payload 
 */
export const setShowSearch = (payload) => ({
  type: SET_SHOW_SEARCH,
  payload
})

/**
 * get themes by search
 * @param {string} payload search string
 */
export const getThemes = (payload) => ({
  type: GET_THEMES,
  payload
})

/**
 * set themes to redux
 * @param {themes[]} payload 
 */
export const setThemes = (payload) => ({
  type: SET_THEMES,
  payload
})

/**
 * set active theme
 * @param {theme object} payload 
 */
export const setActiveTheme = (payload) => ({
  type: SET_ACTIVE_THEME,
  payload
})

/**
 * get events by theme id & currentYear
 * @param {{themeId: string, currentYear: number}} payload 
 */
export const getEvents = (payload) => ({
  type: GET_EVENTS, 
  payload
})

/**
 * set events array to redux
 * @param {events[]} payload themes array
 */
export const setEvents = (payload) => ({
  type: SET_EVENTS,
  payload
})

/**
 * set active event
 * @param {event object} payload event
 */
export const setActiveEvent = payload => ({
  type: SET_ACTIVE_EVENT,
  payload
})

/**
 * set themes loading
 * @param {boolean} payload 
 */
export const setThemesLoading = (payload) => ({
  type: SET_THEMES_LOADING,
  payload
})

/**
 * set current year
 * @param {number} payload year 
 */
export const setCurrentYear = payload => ({
  type: SET_CURRENT_YEAR,
  payload
})

/**
 * set map position
 * @param {[point, point]} payload number array
 */
export const setMapPosition = payload => ({
  type: SET_MAP_POSITION,
  payload
})

/**
 * set map zoom level
 * @param {number} payload zoom
 */
export const setMapZoom = payload => ({
  type: SET_MAP_ZOOM,
  payload
})

/**
 * add or remove in exluded types
 * @param {string} payload type
 */
export const exludeLegendType = payload => ({
  type: LEGEND_EXLUDE_TYPE,
  payload
})

/**
 * add infoblock to array
 * @param {infoblock object} payload 
 */
export const setInfoblocks = payload => ({
  type: SET_INFOBLOCKS,
  payload
})

/**
 * set active infoblock id
 * @param {string} payload object id
 */
export const setInfoblockId = payload => ({
  type: SET_INFOBLOCK_ID,
  payload
})

/**
 * close tab
 * @param {string} payload infoblock id
 */
export const closeInfoblock = payload => ({
  type: CLOSE_INFOBLOCK,
  payload
})

export const clearInfoblockData = () => ({
  type: CLEAR_INFOBLOCK_DATA
})



/**
 * get cities by year
 * @param {year} payload 
 */
export const getCities = payload => ({
  type: GET_CITIES,
  payload
})

/**
 * set cities to redux
 * @param {cities} payload 
 */
export const setCities = payload => ({
  type: SET_CITIES,
  payload
})


export const getDotes = () => ({
  type: GET_DOTES
})

export const setDotes = payload => ({
  type: SET_DOTES,
  payload
})


/**
 * get borders by year
 * @param {year} payload 
 */
 export const getBorders = payload => ({
  type: GET_BORDERS,
  payload
})

/**
 * set borders to redux
 * @param {borders} payload 
 */
export const setBorders = payload => ({
  type: SET_BORDERS,
  payload
})
