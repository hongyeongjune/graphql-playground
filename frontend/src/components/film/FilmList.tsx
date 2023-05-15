import { gql, useQuery } from '@apollo/client';

const FILMS_QUERY = gql`
    query ExampleQuery {
        getFilms {
            id
            title
            subtitle
        }
    }
`

const FilmList =() => {
    const { data, loading, error } = useQuery(FILMS_QUERY);
    return <>
        {loading &&
            <p>...loading</p>
        }
        {error &&
            <p>{error.message}</p>
        }
        {!loading && !error &&
            <pre>{JSON.stringify(data, null, 2)}</pre>
        }
    </>
};

export default FilmList;