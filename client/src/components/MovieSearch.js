import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_MOVIES } from "../queries/queries";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import { Link } from "react-router-dom";

// Material UI
import Box from "@material-ui/core/Box";

// Use this for testing
const hardCodedMovieName = "red";

const MovieSearch = props => {
	const [searchValue, setSearchValue] = useState("");

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

	if (loading) return <h1>Loading...</h1>;

	const renderMovies = () => {
		if (searchValue === "") {
			return <h1>Loading</h1>;
		}
		return data.movieSearch.map(movie => {
			return (
				<li key={movie.id}>
					<MovieCard movieData={movie} />
				</li>
			);
		});
	};

	return (
		<div style={{ width: "100%" }}>
			<form>
				<input value={searchValue} onChange={handleInputChange} type="text" />
				<input onClick={callSearch} type="submit" value="Search" />
			</form>
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

export default MovieSearch;
