import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NewMovies from "./components/NewMovies";
import MovieSearch from "./components/MovieSearch";
import ActorSearch from "./components/ActorSearch";
import Navbar from "./components/layout/Navbar";

import MovieState from "./context/MovieState";
import ActorState from "./context/actor/ActorState";
const client = new ApolloClient({
	uri: "http://localhost:4000/graphql"
});

const App = () => (
	<ApolloProvider client={client}>
		<MovieState>
			<ActorState>
				<Router>
					<Navbar />
					<Switch>
						<Route path="/newmovies" component={NewMovies} />
						<Route path="/moviesearch" component={MovieSearch} />
						<Route path="/actorsearch" component={ActorSearch} />
					</Switch>
				</Router>
			</ActorState>
		</MovieState>
	</ApolloProvider>
);

export default App;
