import { ApolloLink, from, HttpLink } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import unfetch from 'isomorphic-unfetch';
import isBrowser from './is-browser';

const links = [];
const authRestLink = new ApolloLink((operation, forward) => {
  if (isBrowser()) {
    operation.setContext(({ headers }) => {
      const token = localStorage.getItem('token');
      return {
        headers: {
          ...headers,
          Accept: 'application/json',
          Authorization: token,
        },
      };
    });
    return forward(operation).map((result) => {
      const { restResponses } = operation.getContext();
      const authTokenResponse = restResponses.find((res) => res.headers.has('Authorization'));
      // You might also filter on res.url to find the response of a specific API call
      if (authTokenResponse) {
        localStorage.setItem('token', authTokenResponse.headers.get('Authorization'));
      }
      return result;
    });
  }
});
links.push(authRestLink);

const restLink = !isBrowser() ? null : new RestLink({
  uri: 'https://api.github.com/',
});
if (restLink) {
  links.push(restLink);
}

const httpLink = new HttpLink({
  uri: process.env.GATSBY_GITHUB_API_URL,
  fetch: unfetch,
});
links.push(httpLink);

const link = from(links);

export default link;
