import React, { useReducer } from "react";
import axios from "axios";
import keys from "../../../keys/devKeys";

const MovieState = props => {
	const initialState = {
		newMovies: [],
		searchMovies: [],
		loading: false
	};
};

const [state, dispatch] = useReducer(MovieReducer, initialState);
