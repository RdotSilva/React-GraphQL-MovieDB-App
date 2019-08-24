import React, { useReducer } from "react";
import ActorContext from "./actorContext";
import ActorReducer from "./actorReducer";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_ACTOR } from "../../queries/queries";
import { SET_LOADING, SEARCH_ACTORS } from "../types";

const ActorState = props => {
	const initialState = {
		actors: [],
		loading: false
	};

	const [state, dispatch] = useReducer(ActorReducer, initialState);

	const searchForActors = () => {
		setLoading();
		dispatch({
			type: SEARCH_ACTORS,
			payload: data
		});
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<ActorContext.Provider
			value={{
				actors: state.newMovies,
				loading: state.loading,
				searchForActors
			}}
		>
			{props.children}
		</ActorContext.Provider>
	);
};

export default ActorState;
