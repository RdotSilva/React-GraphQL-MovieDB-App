import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIE_INFO } from "../queries/queries";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

// Material UI
import Box from "@material-ui/core/Box";

// Use this for testing
const hardCodedMovieId = "284054";

const MovieSearch = props => {
	const { loading, data } = useQuery(GET_MOVIE_INFO, {
		variables: { id: hardCodedMovieId }
	});

	if (loading) return <h1>Loading...</h1>;
	const { movieInfo } = data;

	const renderMovieInfo = () => {
		return <MovieCard movieData={movieInfo} />;
	};

	return (
		<div style={{ width: "100%" }}>
			<Box
				display="flex"
				p={1}
				bgcolor="background.paper"
				justifyContent="center"
				flexWrap="wrap"
			>
				{renderMovieInfo()}
			</Box>
		</div>
	);
};

export default MovieSearch;
