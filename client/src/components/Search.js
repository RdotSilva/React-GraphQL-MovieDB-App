import React, { useState } from "react";

const Search = props => {
	const [searchValue, setSearchValue] = useState("");

	const handleInputChange = e => {
		setSearchValue(e.target.value);
	};

	const resetInputField = () => {
		setSearchValue("");
	};

	return <div />;
};

export default Search;
