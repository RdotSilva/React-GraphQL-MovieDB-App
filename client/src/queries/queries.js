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

export { getNewMovies };
