import axios from 'axios';

export const getThemes = (search) => axios.get(`/api/themes`, {params: {search}});

export const getThemeById = (id) => axios.get('/api/themes/byId', { params: { id } });

export const getEvents = (themeId, currentYear) => axios.get('/api/events', {params: {themeId, currentYear}});

export const getCities = (year) => axios.get(`/api/cities/${year}`, {params: {}});

export const getDotesRequest = () => axios.get(`/api/dotes`, {params: {}});

export const getBorders = (year) => axios.get(`/api/borders/${year}`, {params: {}});
