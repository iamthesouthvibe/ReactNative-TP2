import { gql, useQuery } from "@apollo/client";

const getAllMoviesQuery = gql`
query GetAllMovies {
    getAllMovies {
        id
        year
        title
        picture
        category
    }
}
`

export function useGetAllMovies() {
    const {data, loading, error} = useQuery(getAllMoviesQuery);

    return {
        data,
        loading,
        error
    }
}