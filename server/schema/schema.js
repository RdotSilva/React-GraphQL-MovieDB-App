const graphql = require("graphql");
const axios = require("axios");
const keys = require("../../keys/devKeys");

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema, // we'll use them for the RootQuery
	GraphQLList
} = graphql;

const NewMoviesType = new GraphQLObjectType({
	name: "NewMovies",
	fields: {
		id: { type: GraphQLInt },
		poster_path: { type: GraphQLString },
		title: { type: GraphQLString },
		overview: { type: GraphQLString },
		release_date: { type: GraphQLString }
	}
});

const MovieInfoType = new GraphQLObjectType({
	name: "MovieInfo",
	fields: {
		id: { type: GraphQLInt },
		overview: { type: GraphQLString },
		title: { type: GraphQLString },
		poster_path: { type: GraphQLString },
		genres: { type: GraphQLString },
		release_date: { type: GraphQLString },
		vote_average: { type: GraphQLString },
		production_companies: { type: GraphQLString },
		vote_average: { type: GraphQLString },
		runtime: { type: GraphQLString }
	}
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		newMovies: {
			type: new GraphQLList(NewMoviesType),
			resolve() {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/now_playing?api_key=${
							process.env.API
						}&language=en-US&page=1`
					)
					.then(res => {
						const movies = res.data.results;
						movies.map(
							movie =>
								(movie.poster_path =
									"https://image.tmdb.org/t/p/w500" + movie.poster_path)
						);
						return movies;
					});
			}
		},
		movieInfo: {
			type: MovieInfoType,
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/${args.id}?api_key=${
							process.env.API
						}&language=en-US&page=1`
					)
					.then(res => {
						const movie = res.data;
						movie.genres = movie.genres.map(g => g.name).join(", ");
						movie.production_companies = movie.production_companies
							.map(c => c.name)
							.join(", ");
						movie.runtime += " min.";
						return movie;
					});
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
