import { ApolloClient } from '@apollo/client';
import InstantiateCache from './cache';
import link from './links';

const client = new ApolloClient({
  cache: InstantiateCache(),
  link,
});

export default client;
