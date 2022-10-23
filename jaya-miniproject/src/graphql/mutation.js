import { gql } from "@apollo/client";

export const INSERT_WISATA = gql`
  mutation insertWisata($object: wisata_insert_input!) {
    insert_wisata_one(object: $object) {
      id
      nama_wisata
      kategori
      alamat
      deskripsi
      gambar
      id_admin
    }
  }
`;

export const INSERT_ULASAN = gql`
  mutation insertUlasan($object: ulasan_insert_input!) {
    insert_ulasan_one(object: $object) {
      id
      nama
      email
      ulasan
      id_wisata
    }
  }
`;

export const DELETE_WSIATA_BY_ID = gql`
  mutation deleteWisataById($id: Int!) {
    delete_wisata_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_BERITA = gql`
  mutation insertBerita($object: berita_insert_input!) {
    insert_berita_one(object: $object) {
      id
      judul
      deskripsi
      tgl_posting
      gambar
      id_admin
    }
  }
`;

export const DELETE_BERITA_BY_ID = gql`
  mutation deleteBeritaById($id: Int!) {
    delete_berita_by_pk(id: $id) {
      id
    }
  }
`;

// export const UPDATE_WISATA = gql`
//   mutation updateWisata($id: Int!, $update: wisata_set_input) {
//     update_wisata_by_pk(pk_columns: { id: $id }, _set: $update) {
//       id
//       nama_wisata
//       kategori
//       deskripsi
//       alamat
//       gambar
//       id_admin
//     }
//   }
// `;

export const UPDATE_WISATA = gql`
  mutation updateWisata($id: Int!, $nama_wisata: String = "", $kategori: String = "", $alamat: String = "", $deskripsi: String = "", $gambar: String = "", $id_admin: Int = 10) {
    update_wisata(where: { id: { _eq: $id } }, _set: { nama_wisata: $nama_wisata, kategori: $kategori, alamat: $alamat, deskripsi: $deskripsi, gambar: $gambar, id_admin: $id_admin }) {
      returning {
        id
        nama_wisata
        gambar
      }
    }
  }
`;

export const UPDATE_BERITA = gql`
  mutation updateBerita($id: Int!, $judul: String = "", $deskripsi: String = "", $tgl_posting: date = "", $gambar: String = "", $id_admin: Int = 10) {
    update_berita(where: { id: { _eq: $id } }, _set: { judul: $judul, deskripsi: $deskripsi, tgl_posting: $tgl_posting, gambar: $gambar, id_admin: $id_admin }) {
      returning {
        id
        judul
        deskripsi
        tgl_posting
        gambar
        id_admin
      }
    }
  }
`;

export const DELETE_ULASAN_BY_ID = gql`
  mutation deleteUlasanById($id: Int!) {
    delete_ulasan_by_pk(id: $id) {
      id
    }
  }
`;

export const DELETE_ADMIN_BY_ID = gql`
  mutation deleteAdminById($id: Int!) {
    delete_admin_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_ADMIN = gql`
  mutation insertAdmin($object: admin_insert_input!) {
    insert_admin_one(object: $object) {
      id
      nama_admin
      username
      password
    }
  }
`;

export const UPDATE_ADMIN = gql`
  mutation updateAdmin($id: Int!, $nama_admin: String = "", $username: String = "", $password: String = "") {
    update_admin(where: { id: { _eq: $id } }, _set: { nama_admin: $nama_admin, username: $username, password: $password }) {
      returning {
        id
        nama_admin
        username
        password
      }
    }
  }
`;
