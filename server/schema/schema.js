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

const ActorType = new GraphQLObjectType({
	name: "ActorSearch",
	fields: {
		id: { type: GraphQLInt },
		profile_path: { type: GraphQLString },
		name: { type: GraphQLString }
	}
});

const MovieSearchType = new GraphQLObjectType({
	name: "MovieSearch",
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
		runtime: { type: GraphQLString },
		imdb_id: { type: GraphQLString }
	}
});

const VideoType = new GraphQLObjectType({
	name: "Video",
	fields: {
		id: { type: GraphQLString },
		key: { type: GraphQLString }
	}
});

const MovieCreditsType = new GraphQLObjectType({
	name: "MovieCredits",
	fields: {
		id: { type: GraphQLString },
		character: { type: GraphQLString },
		name: { type: GraphQLString },
		profile_path: { type: GraphQLString },
		order: { type: GraphQLString }
	}
});

const MovieReviewsType = new GraphQLObjectType({
	name: "MovieReviews",
	fields: {
		id: { type: GraphQLString },
		content: { type: GraphQLString },
		author: { type: GraphQLString }
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
		runtime: { type: GraphQLString },
		imdb_id: { type: GraphQLString },
		videos: {
			type: new GraphQLList(VideoType),
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/${
							parentValue.id
						}/videos?api_key=${keys.apiKey}&language=en-US`
					)
					.then(res => res.data.results);
			}
		},
		movieReviews: {
			type: new GraphQLList(MovieReviewsType),
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/${
							parentValue.id
						}/reviews?api_key=${keys.apiKey}&language=en-US&page=1`
					)
					.then(res => res.data.results);
			}
		},
		movieCredits: {
			type: new GraphQLList(MovieCreditsType),
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/${
							parentValue.id
						}/credits?api_key=${keys.apiKey}&language=en-US&page=1`
					)
					.then(res => res.data.cast.filter(cast => cast.profile_path));
			}
		}
	}
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		videos: {
			type: new GraphQLList(VideoType),
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/${args.id}/videos?api_key=${
							keys.apiKey
						}&language=en-US`
					)
					.then(res => res.data.results);
			}
		},
		movieReviews: {
			type: new GraphQLList(MovieReviewsType),
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/${args.id}/reviews?api_key=${
							keys.apiKey
						}&language=en-US&page=1`
					)
					.then(res => res.data.results);
			}
		},
		movieSearch: {
			type: new GraphQLList(MovieSearchType),
			args: { searchField: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/search/movie?api_key=${
							keys.apiKey
						}&language=en-US&query=${
							args.searchField
						}&page=1&include_adult=false`
					)
					.then(res => {
						movies = res.data.results;
						movies.map(movie => {
							(movie.imdb_id = `https://www.imdb.com/title/${movie.imdb_id}`),
								(movie.poster_path =
									"https://image.tmdb.org/t/p/w500" + movie.poster_path);
						});
						return movies;
					});
			}
		},
		actorSearch: {
			type: new GraphQLList(ActorType),
			args: { searchField: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/search/person?api_key=${
							keys.apiKey
						}&language=en-US&query=${
							args.searchField
						}&page=1&include_adult=false`
					)
					.then(res => {
						actors = res.data.results;
						actors.map(actor => {
							actor.profile_path =
								"https://image.tmdb.org/t/p/w500" + actor.profile_path;
						});
						return actors;
					});
			}
		},
		movieCredits: {
			type: new GraphQLList(MovieCreditsType),
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/${args.id}/credits?api_key=${
							keys.apiKey
						}&language=en-US&page=1`
					)
					.then(res => res.data.cast.filter(cast => cast.profile_path));
			}
		},
		newMovies: {
			type: new GraphQLList(NewMoviesType),
			resolve() {
				return axios
					.get(
						`https://api.themoviedb.org/3/movie/now_playing?api_key=${
							keys.apiKey
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
							keys.apiKey
						}&language=en-US&page=1`
					)
					.then(res => {
						const movie = res.data;
						movie.genres = movie.genres.map(genre => genre.name).join(", ");
						movie.production_companies = movie.production_companies
							.map(company => company.name)
							.join(", ");
						movie.runtime += " min.";
						movie.poster_path =
							"https://image.tmdb.org/t/p/w500" + movie.poster_path;
						movie.imdb_id = `https://www.imdb.com/title/${movie.imdb_id}`;
						return movie;
					});
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
