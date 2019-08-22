import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_MOVIES } from "../queries/queries";
import MovieCard from "../components/MovieCard";

// Material UI
import Box from "@material-ui/core/Box";

const MovieSearch = props => {
	const [searchValue, setSearchValue] = useState(" ");

	const { loading, data } = useQuery(SEARCH_MOVIES, {
		variables: { searchField: searchValue }
	});

	const handleInputChange = e => {
		setSearchValue(e.target.value);
	};

	const resetInputField = () => {
		setSearchValue("");
	};

	const callSearch = e => {
		e.preventDefault();
		props.search(searchValue);
		resetInputField();
	};

	// if (loading) return <h1>Loading...</h1>;

	const renderMovies = () => {
		return data.movieSearch.map(movie => {
			return (
				<li key={movie.id}>
					<MovieCard movieData={movie} />
				</li>
			);
		});
	};

	return (
		<div style={{ width: "100%", backgroundColor: "#ecf2f9" }}>
			<form>
				<input value={searchValue} onChange={handleInputChange} type="text" />
				<input onClick={callSearch} type="submit" value="Search" />
			</form>
			<Box
				display="flex"
				p={1}
				bgcolor="#ecf2f9"
				justifyContent="center"
				flexWrap="wrap"
			>
				{loading ? <h1> </h1> : renderMovies()}
			</Box>
		</div>
	);
};

export default MovieSearch;
