import { SEARCH_MOVIES, SET_LOADING, FETCH_TOP_MOVIES } from "./types";

export default (state, action) => {
	switch (action.type) {
		case SEARCH_MOVIES:
			return {
				...state,
				searchMovies: action.payload,
				loading: false
			};
		case FETCH_TOP_MOVIES:
			return {
				...state,
				newMovies: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
