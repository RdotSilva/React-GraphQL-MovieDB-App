import { gql } from "apollo-boost";

const getNewMovies = gql`
	{
		newMovies {
			id
			title
			poster_path
			overview
			release_date
		}
	}
`;

const getMovieInfo = gql`
	{
		movieInfo(id: "284054") {
			id
			poster_path
			overview
			release_date
			title
			imdb_id
			videos {
				id
				key
			}
		}
	}
`;

export { getNewMovies, getMovieInfo };
