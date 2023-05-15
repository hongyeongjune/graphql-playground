import * as React from 'react';
import { Box, ChakraProvider, Text, theme } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import FilmList from './components/film/FilmList';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
});

export const App = () => (
    <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
            <Box>
                <FilmList />
            </Box>
        </ChakraProvider>
    </ApolloProvider>
);
