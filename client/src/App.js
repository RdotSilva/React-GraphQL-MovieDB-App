import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NewMovies from "./components/NewMovies";
import MovieSearch from "./components/MovieSearch";
import Navbar from "./components/layout/Navbar";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql"
});

const App = () => (
	<ApolloProvider client={client}>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/newmovies" component={NewMovies} />
				<Route path="/moviesearch" component={MovieSearch} />
			</Switch>
		</Router>
	</ApolloProvider>
);

export default App;
