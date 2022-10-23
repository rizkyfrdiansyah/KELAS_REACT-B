import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://alterra-mini-project.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "zacGqYm7rNa6mTqhseA17DUAa4UQywOmUezvaBW8x3FEDmm9SNo6ivdN8H9iEYDy",
  },
});

export default client;
