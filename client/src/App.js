import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql"
});

const App = () => (
	<ApolloProvider client={client}>
		<h1>App works</h1>
	</ApolloProvider>
);

export default App;
