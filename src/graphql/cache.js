import { InMemoryCache } from '@apollo/client';

const InstantiateCache = () => {
  const cache = new InMemoryCache();
  return cache;
};

export default InstantiateCache;
