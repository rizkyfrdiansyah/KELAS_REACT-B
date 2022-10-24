import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { split, HttpLink } from '@apollo/client';
// import { getMainDefinition } from '@apollo/client/utilities';
// import { WebSocketLink } from '@apollo/client/link/ws';

const client = new ApolloClient({
  uri: "https://miniproject-vakasha.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "QJ4KRJRc5ey30sda7LQgySD3t7JYwS5gzH5pyqUiRZ2iaAs8Hbj6LjrhP1sJb2HW",
  },
});

// const httpLink = new HttpLink({
//     uri: 'https://miniproject-vakasha.hasura.app/v1/graphql',
//     headers: {
//         'x-hasura-admin-secret':
//             'QJ4KRJRc5ey30sda7LQgySD3t7JYwS5gzH5pyqUiRZ2iaAs8Hbj6LjrhP1sJb2HW'
//     }
// });

// const wsLink = new WebSocketLink({
//     uri: 'wss://miniproject-vakasha.hasura.app/v1/graphql',
//     options: {
//         reconnect: true,
//         connectionParams: {
//             headers: {
//                 'x-hasura-admin-secret':
//                     'QJ4KRJRc5ey30sda7LQgySD3t7JYwS5gzH5pyqUiRZ2iaAs8Hbj6LjrhP1sJb2HW'
//             }
//         }
//     }
// });

// const splitLink = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//             definition.kind === 'OperationDefinition' &&
//             definition.operation === 'subscription'
//         );
//     },
//     wsLink,
//     httpLink,
// );

// const client = new ApolloClient({
//     link: splitLink,
//     cache: new InMemoryCache(),
// });

export default client;
