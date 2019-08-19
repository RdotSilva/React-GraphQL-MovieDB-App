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
			videos {
				id
				key
			}
		}
	}
`;

export { getNewMovies, getMovieInfo };
