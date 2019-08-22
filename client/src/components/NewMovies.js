import React, { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieContext from "../context/movieContext";

// Material UI
import Box from "@material-ui/core/Box";

const NewMovies = props => {
	const movieContext = useContext(MovieContext);

	useEffect(() => {
		movieContext.fetchNewMovies();
	}, []);

	const { newMovies } = movieContext;

	const renderMovies = newMovies => {
		return newMovies.map(movie => {
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
			/>
			{typeof newMovies.newMovies === "undefined" ? (
				<h1 />
			) : (
				renderMovies(newMovies.newMovies)
			)}
		</div>
	);
};

export default NewMovies;
