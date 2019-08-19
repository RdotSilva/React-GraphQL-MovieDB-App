import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getMovieInfo } from "../queries/queries";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

// Material UI
import Box from "@material-ui/core/Box";

const MovieSearch = props => {
	const { loading, data } = useQuery(getMovieInfo);

	if (loading) return <h1>Loading...</h1>;
	return <div />;
};

export default MovieSearch;
