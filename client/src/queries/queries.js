import { gql } from "apollo-boost";

const getNewMovies = gql`
	{
		newMovies {
			id
			title
			poster_path
		}
	}
`;

export { getNewMovies };
