import React, { useReducer } from "react";
import ActorContext from "./actorContext";
import ActorReducer from "./actorreducer";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_ACTOR } from "../queries/queries";
import { SET_LOADING, SEARCH_ACTORS } from "./types";

const ActorState = props => {
	const initialState = {
		actors: [],
		loading: false
	};

	const [state, dispatch] = useReducer(ActorReducer, initialState);

	const { data } = useQuery(SEARCH_ACTOR);

	const searchForActors = () => {
		setLoading();
		dispatch({
			type: FETCH_TOP_MOVIES,
			payload: data
		});
	};
};

export default ActorState;
