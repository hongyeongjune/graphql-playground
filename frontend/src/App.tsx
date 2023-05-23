import * as React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import FilmList from './components/film/FilmList';
import { createApolloClient } from './apollo/createApolloClient';

const apolloClient = createApolloClient();

export const App = () => (
    <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
            <Box>
                <FilmList />
            </Box>
        </ChakraProvider>
    </ApolloProvider>
);
