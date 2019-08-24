import { SEARCH_ACTORS, SET_LOADING } from "./types";

export default (state, action) => {
	switch (action.type) {
		case SEARCH_ACTORS:
			return {
				...state,
				actors: action.payload,
				loading: false
			};

		default:
			return state;
	}
};
