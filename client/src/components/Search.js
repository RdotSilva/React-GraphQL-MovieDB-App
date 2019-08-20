import React, { useState } from "react";

const Search = props => {
	const [searchValue, setSearchValue] = useState("");

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

	return (
		<form>
			<input value={searchValue} onChange={handleInputChange} type="text" />
			<input onClick={callSearch} type="submit" value="Search" />
		</form>
	);
};

export default Search;
