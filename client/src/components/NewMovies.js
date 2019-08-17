import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getNewMovies } from "../queries/queries";

import { Link } from "react-router-dom";

const NewMovies = props => {
	const { loading, data } = useQuery(getNewMovies);

	if (loading) return <h1>Loading...</h1>;

	const renderMovies = () => {
		return data.newMovies.map(movie => {
			return (
				<li key={movie.id}>
					<Link to={""}>{movie.title}</Link>
				</li>
			);
		});
	};

	console.log(data);

	return <ul>{renderMovies()}</ul>;
};

export default NewMovies;
