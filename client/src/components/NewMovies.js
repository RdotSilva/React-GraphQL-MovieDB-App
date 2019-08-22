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

	// if (loading) {
	// 	return <h1>Loading...</h1>;
	// }

	// const renderMovies = () => {
	// 	return data.newMovies.map(movie => {
	// 		return (
	// 			<li key={movie.id}>
	// 				<MovieCard movieData={movie} />
	// 			</li>
	// 		);
	// 	});
	// };

	return (
		<div style={{ width: "100%" }}>
			<form>
				<input onClick={test} type="submit" value="test" />
			</form>
			<Box
				display="flex"
				p={1}
				bgcolor="background.paper"
				justifyContent="center"
				flexWrap="wrap"
			/>
		</div>
	);
};

export default NewMovies;
