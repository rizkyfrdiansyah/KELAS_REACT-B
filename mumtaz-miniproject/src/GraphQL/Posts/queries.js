import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query data {
    posts(order_by: { tgl_upload: desc }) {
      id
      id_penulis
      judul
      isi
      kategori
      post_banner
      tgl_upload
      user {
        id
        nama
      }
    }
  }
`;

export const SUBSCRIPTION_POSTS = gql`
  subscription data($offset: Int!) {
    posts(limit: 12, offset: $offset, order_by: { tgl_upload: desc }) {
      id
      id_penulis
      judul
      isi
      kategori
      post_banner
      tgl_upload
      user {
        id
        nama
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation AddNewPost($judul: String!, $isi: String!, $id_penulis: Int!, $post_banner: String!, $kategori: String!) {
    insert_posts_one(object: { judul: $judul, isi: $isi, post_banner: $post_banner, kategori: $kategori, user: { data: { id: $id_penulis }, on_conflict: { constraint: users_pkey, update_columns: id } } }) {
      id
      id_penulis
      judul
      isi
      kategori
      post_banner
      tgl_upload
      user {
        id
        nama
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: Int!) {
    delete_posts_by_pk(id: $id) {
      id
      judul
      isi
      id_penulis
      user {
        id
        nama
      }
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: Int!, $judul: String!, $isi: String!, $id_penulis: Int!, $post_banner: String!, $kategori: String!) {
    update_blogs_posts_by_pk(pk_columns: { id: $id }, _set: { judul: $judul, isi: $isi, post_banner: $post_banner, id_penulis: $id_penulis, kategori: $kategori }) {
      id
      judul
      isi
      id_penulis
      post_banner
      tgl_upload
      kategori
    }
  }
`;
