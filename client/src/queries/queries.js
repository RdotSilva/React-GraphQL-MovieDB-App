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
			title
			videos {
				id
				key
			}
		}
	}
`;

export { getNewMovies, getMovieInfo };
