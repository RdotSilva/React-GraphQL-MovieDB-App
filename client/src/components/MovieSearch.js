import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOVIE_INFO, SEARCH_MOVIES } from "../queries/queries";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import { Link } from "react-router-dom";

// Material UI
import Box from "@material-ui/core/Box";

// Use this for testing
const hardCodedMovieName = "red";

const MovieSearch = props => {
	const { loading, data } = useQuery(SEARCH_MOVIES, {
		variables: { searchField: hardCodedMovieName }
	});

	if (loading) return <h1>Loading...</h1>;
	console.log(data);

	const renderMovieInfo = () => {
		// return <MovieCard movieData={movieInfo} />;
		return <h1>Test</h1>;
	};

	return (
		<div style={{ width: "100%" }}>
			<Search />
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
