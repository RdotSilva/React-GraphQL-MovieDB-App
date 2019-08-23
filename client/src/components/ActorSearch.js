import React, { useState } from "react";

const ActorSearch = () => {
	const [searchValue, setSearchValue] = useState(" ");

	const handleInputChange = e => {
		setSearchValue(e.target.value);
	};

	return <h1>Actor List</h1>;
};

export default ActorSearch;
