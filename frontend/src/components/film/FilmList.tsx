import { FilmsQuery, useFilmsQuery } from '../../generated/graphql';
import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';
import FilmCard from './FilmCard';

const FilmList =() => {
    const { data, loading, error, fetchMore } = useFilmsQuery({
        variables: {
            filmId: 1,
            limit: 6,
        }
    });
    return <SimpleGrid columns={[2, null, 3]} spacing={[2, null, 10]}>
        {error &&
            <p>{error.message}</p>
        }
        {loading &&
            new Array(6).fill(0).map((x) => <Skeleton key={x} height="400px" />)
        }
        {!loading && data &&
            data.getFilms.data.map((film) => (
                <Box key={film.id}>
                    <FilmCard film={film} />
                </Box>
            ))
        }
    </SimpleGrid>
};

export default FilmList;