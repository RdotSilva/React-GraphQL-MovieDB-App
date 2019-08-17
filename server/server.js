const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../server/schema/schema");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Server is up!");
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true
	})
);
