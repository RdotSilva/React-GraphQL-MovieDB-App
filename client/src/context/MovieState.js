import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import keys from "../../../keys/devKeys";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_MOVIES } from "../queries/queries";

const MovieState = props => {
	const initialState = {
		newMovies: [],
		searchMovies: [],
		loading: false
	};

	const [state, dispatch] = useReducer(MovieReducer, initialState);

	const { loading, data } = useQuery(SEARCH_MOVIES, {
		variables: { searchField: searchValue }
	});

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
