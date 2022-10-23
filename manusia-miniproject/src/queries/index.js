import { gql } from "@apollo/client";

export const SubscriptionAllMuseum = gql`
  subscription MySubscription {
    mini_project_museum(order_by: { id: asc }) {
      id
      nama
      deksripsi
      alamat
      jadwal
      kontak
      gambar
    }
  }
`;

export const SubscriptionAllUlasan = gql`
  subscription MySubscription {
    mini_project_ulasan {
      id
      id_museum
      id_user
      ulasan
      date
      img
    }
  }
`;

export const SubscriptionAllFoto = gql`
  subscription MySubscription($where: mini_project_album_bool_exp!) {
    mini_project_album(where: $where) {
      img
      id
      id_museum
      upload_date
    }
  }
`;

export const getUser = gql`
  query MyQuery($where: mini_project_users_bool_exp = {}) {
    mini_project_users(where: $where) {
      id
      role
      email
      password
      nama
      profile_pic
      remember_me
    }
  }
`;

export const updateRememberMe = gql`
  mutation MyMutation($where: mini_project_users_bool_exp!, $_set: mini_project_users_set_input!) {
    update_mini_project_users(where: $where, _set: $_set) {
      returning {
        id
        nama
        role
        remember_me
      }
    }
  }
`;

export const getMuseum = gql`
  query MyQuery($where: mini_project_museum_bool_exp!) {
    mini_project_museum(where: $where) {
      id
      nama
      deksripsi
      alamat
      jadwal
      kontak
      gambar
    }
  }
`;

export const getAllMuseumAndUlasan = gql`
  query MyQuery {
    mini_project_ulasan(order_by: { id: asc }) {
      id
      id_museum
    }
    mini_project_museum(order_by: { id: asc }) {
      id
      nama
      deksripsi
      alamat
      gambar
      jadwal
      kontak
    }
  }
`;

export const getMuseumAndUlasan = gql`
  query MyQuery($museum: mini_project_museum_bool_exp!, $ulasan: mini_project_ulasan_bool_exp!, $album: mini_project_album_bool_exp!) {
    mini_project_museum(where: $museum) {
      id
      nama
      deksripsi
      alamat
      gambar
      jadwal
      kontak
    }
    mini_project_ulasan(where: $ulasan, order_by: { id: asc }) {
      ulasan
      img
      date
      id_museum
      id_user
    }
    mini_project_album(where: $album) {
      id
      id_museum
      img
      upload_date
    }
    mini_project_users(where: { role: { _eq: "pengguna" } }) {
      nama
      id
      profile_pic
    }
  }
`;

export const addUlasan = gql`
  mutation MyMutation($objects: [mini_project_ulasan_insert_input!]!) {
    insert_mini_project_ulasan(objects: $objects) {
      returning {
        id
        date
        id_museum
        id_user
        img
        ulasan
      }
    }
  }
`;

export const addAlbumMuseum = gql`
  mutation MyMutation($objects: [mini_project_album_insert_input!]!) {
    insert_mini_project_album(objects: $objects) {
      returning {
        id
        id_museum
      }
    }
  }
`;

export const addMuseum = gql`
  mutation MyMutation($objects: [mini_project_museum_insert_input!]!) {
    insert_mini_project_museum(objects: $objects) {
      returning {
        id
        nama
        deksripsi
        alamat
        jadwal
        kontak
        gambar
      }
    }
  }
`;

export const addUser = gql`
  mutation MyMutation($objects: [mini_project_users_insert_input!]!) {
    insert_mini_project_users(objects: $objects) {
      returning {
        email
        id
        nama
        password
        profile_pic
        role
      }
    }
  }
`;

export const updateMuseum = gql`
  mutation MyMutation($where: mini_project_museum_bool_exp!, $_set: mini_project_museum_set_input!) {
    update_mini_project_museum(where: $where, _set: $_set) {
      returning {
        id
        nama
        alamat
        deksripsi
        kontak
        jadwal
        gambar
      }
    }
  }
`;

export const deleteMuseum = gql`
  mutation MyMutation($id: Int_comparison_exp!) {
    delete_mini_project_museum(where: { id: $id }) {
      returning {
        id
        nama
        alamat
        deksripsi
        kontak
        jadwal
        gambar
      }
    }
  }
`;
