import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import keys from "../../../keys/devKeys";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_MOVIES } from "../queries/queries";
import { SET_LOADING, FETCH_TOP_MOVIES } from "./types";

const MovieState = props => {
	const initialState = {
		newMovies: [],
		searchMovies: [],
		loading: false
	};

	const [state, dispatch] = useReducer(MovieReducer, initialState);

	const { loadingOne, dataOne } = useQuery(SEARCH_MOVIES, {
		variables: { searchField: searchValue }
	});

	const getNewMovies = async () => {
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
				loading: state.loading
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieState;
