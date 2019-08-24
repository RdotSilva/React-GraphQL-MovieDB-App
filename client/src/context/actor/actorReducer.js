import { SEARCH_ACTORS, SET_LOADING } from "../types";

export default (state, action) => {
	switch (action.type) {
		case SEARCH_ACTORS:
			return {
				...state,
				actors: action.payload,
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
