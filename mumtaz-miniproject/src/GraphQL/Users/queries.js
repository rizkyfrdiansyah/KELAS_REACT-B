import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getAllUsers {
    users {
      id
      nama
      profile_pic
      role
      username
      password
    }
  }
`;

export const GET_ONE_USER = gql`
  query getOneUser($username: String!, $password: String!) {
    users(where: { username: { _eq: $username }, password: { _eq: $password } }) {
      id
      nama
      username
      password
      profile_pic
      role
      posts {
        id
        id_penulis
        isi
        judul
        kategori
        post_banner
        tgl_upload
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query getAllAuthors {
    users(where: { role: { _eq: "author" } }) {
      id
      nama
      profile_pic
      role
      username
      password
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($nama: String!, $profile_pic: String!, $role: String!, $username: String!, $password: String!) {
    insert_users_one(object: { nama: $nama, profile_pic: $profile_pic, role: $role, username: $username, password: $password }) {
      id
      nama
      profile_pic
      role
      username
      password
    }
  }
`;

export const UPDATE_USER = gql`
  mutation MyMutation($id: Int!, $nama: String!, $profile_pic: String!, $role: String!, $username: String!, $password: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { nama: $nama, profile_pic: $profile_pic, role: $role, username: $username, password: $password }) {
      id
      nama
      profile_pic
      role
      username
      password
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteAuthor($id: Int!) {
    delete_blogs_users_by_pk(id: $id) {
      id
      nama
      role
    }
  }
`;
