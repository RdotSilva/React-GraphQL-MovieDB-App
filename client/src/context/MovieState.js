import React, { useReducer } from "react";
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import { useQuery } from "@apollo/react-hooks";
import { getNewMovies } from "../queries/queries";
import { SET_LOADING, FETCH_TOP_MOVIES } from "./types";

const MovieState = props => {
	const initialState = {
		newMovies: [],
		searchMovies: [],
		loading: false
	};

	const [state, dispatch] = useReducer(MovieReducer, initialState);

	const fetchNewMovies = async () => {
		setLoading();
		const { data } = await useQuery(getNewMovies);
		dispatch({
			type: FETCH_TOP_MOVIES,
			payload: data
		});
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<MovieContext.Provider
			value={{
				newMovies: state.newMovies,
				searchMovies: state.searchMovies,
				loading: state.loading,
				fetchNewMovies
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieState;
