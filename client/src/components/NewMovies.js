import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getNewMovies } from "../queries/queries";

const NewMovies = props => {
	const { loading, data } = useQuery(getNewMovies);

	if (loading) return <h1>Loading...</h1>;

	console.log(data);

	return <h1>NEW MOVIES!</h1>;
};

export default NewMovies;
