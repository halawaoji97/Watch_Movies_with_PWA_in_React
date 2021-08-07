import CONFIG from './config';

const API_ENDPOINT = {
	NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
	TOP_RATED: `${CONFIG.BASE_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
	UP_COMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
	SEARCH: `${CONFIG.BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}`,
};

export default API_ENDPOINT;
