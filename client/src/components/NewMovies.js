import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getNewMovies } from "../queries/queries";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

// Material UI
import Box from "@material-ui/core/Box";

const NewMovies = props => {
	const { loading, data } = useQuery(getNewMovies);

	if (loading) return <h1>Loading...</h1>;

	const renderMovies = () => {
		return data.newMovies.map(movie => {
			return (
				<li key={movie.id}>
					<MovieCard movieData={movie} />
				</li>
			);
		});
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
				{renderMovies()}
			</Box>
		</div>
	);
};

export default NewMovies;
