import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://muhamadjaya.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "f0e54ed7d04076579203208355517c0500b0e3d818f417c5df93838e9e39603b",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://muhamadjaya.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "f0e54ed7d04076579203208355517c0500b0e3d818f417c5df93838e9e39603b",
      },
    },
  })
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      todolist: {
        fields: {
          title: {
            merge(existing, incoming, { mergeObjects }) {
              return mergeObjects(existing, incoming);
            },
          },
        },
      },
    },
  }),
});

export default client;
