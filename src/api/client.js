import axios from 'axios';

const GraphQLClient = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env.GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

export default GraphQLClient;