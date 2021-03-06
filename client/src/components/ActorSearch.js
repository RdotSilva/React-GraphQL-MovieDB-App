import React, { useState, useEffect, useContext } from "react";
import ActorContext from "../context/actor/actorContext";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_ACTOR } from "../queries/queries";

// Material UI
import Box from "@material-ui/core/Box";

const ActorSearch = props => {
	const [searchValue, setSearchValue] = useState(" ");

	const actorContext = useContext(ActorContext);

	const { data, loading } = useQuery(SEARCH_ACTOR, {
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
		actorContext.searchForActors(data);
		resetInputField();
	};

	const renderActors = () => {
		return data.actorSearch.map(actor => {
			return <li key={actor.id}>{actor.name}</li>;
		});
	};

	return (
		<div style={{ width: "100%", backgroundColor: "#ecf2f9" }}>
			<form style={{ display: "block", textAlign: "center" }}>
				<input value={searchValue} onChange={handleInputChange} type="text" />
				<input
					style={{ margin: 8 }}
					onClick={callSearch}
					type="submit"
					value="Search"
				/>
			</form>
			<Box
				display="flex"
				p={1}
				bgcolor="#ecf2f9"
				justifyContent="center"
				flexWrap="wrap"
			>
				{loading ? <h1> </h1> : renderActors()}
			</Box>
		</div>
	);
};

export default ActorSearch;
