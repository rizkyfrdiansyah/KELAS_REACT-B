import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://task-section-22.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "OosXPFmYoZCDFH29qmPg0h8tjO8IDBZ3ZYd7LOpZKslLXtfG1OqoSp17Jd7f7gSM",
  },
  cache: new InMemoryCache(),
});

export default client;
