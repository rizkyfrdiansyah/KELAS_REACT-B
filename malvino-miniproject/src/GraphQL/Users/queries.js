import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($username: String, $password: String) {
    users(where: { username: { _eq: $username }, password: { _eq: $password } }) {
      id
      email
      noHandphone
      password
      username
      role
    }
  }
`;

export const INSERT_USER = gql`
  mutation insertUser($username: String, $password: String, $email: String, $noHandphone: String) {
    insert_users_one(object: { username: $username, password: $password, email: $email, noHandphone: $noHandphone }) {
      id
    }
  }
`;
