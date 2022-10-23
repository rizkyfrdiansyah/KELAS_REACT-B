import { gql } from "@apollo/client";

export const GET_LISTWISATA = gql`
  query getListWisata {
    wisata(order_by: { id: asc }) {
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

export const GET_WISATA_BY_ID = gql`
  query getWisataById($id: Int!) {
    wisata(where: { id: { _eq: $id } }) {
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

export const GET_WISATA_BY_NAME = gql`
  query getWisataByName($nama_wisata: String!) {
    wisata(where: { nama_wisata: { _ilike: $nama_wisata } }) {
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

export const GET_LISTULASAN = gql`
  query getListUlasan {
    ulasan(order_by: { id: asc }) {
      id
      nama
      email
      ulasan
      id_wisata
    }
  }
`;

export const GET_WISATA_AND_ULASAN = gql`
  query getWisataAndUlasanById($id: Int!) {
    wisata(where: { id: { _eq: $id } }) {
      id
      nama_wisata
      kategori
      alamat
      deskripsi
      gambar
      id_admin
    }
    ulasan(where: { id_wisata: { _eq: $id } }) {
      id
      nama
      email
      ulasan
      id_wisata
    }
  }
`;

export const GET_ULASAN_BY_ID_WISATA = gql`
  query getUlasanByIdWisata($id_wisata: Int!) {
    ulasan(where: { id_wisata: { _eq: $id_wisata } }, order_by: { id: asc }) {
      id
      nama
      email
      ulasan
      id_wisata
    }
  }
`;

export const GET_LISTBERITA = gql`
  query getListBerita {
    berita(order_by: { id: asc }) {
      id
      judul
      deskripsi
      tgl_posting
      gambar
      id_admin
    }
  }
`;

export const GET_BERITA_BY_ID = gql`
  query getBeritaById($id: Int!) {
    berita(where: { id: { _eq: $id } }) {
      id
      judul
      deskripsi
      tgl_posting
      gambar
      id_admin
    }
  }
`;

export const GET_BERITA_BY_NAME = gql`
  query getBeritaByName($judul: String!) {
    berita(where: { judul: { _ilike: $judul } }) {
      id
      judul
      deskripsi
      tgl_posting
      gambar
      id_admin
    }
  }
`;

export const GET_LISTADMIN = gql`
  query getListAdmin {
    admin(order_by: { id: asc }) {
      id
      nama_admin
      username
      password
    }
  }
`;

export const GET_ADMIN = gql`
  query getAdmin($username: String, $password: String) {
    admin(where: { username: { _eq: $username }, password: { _eq: $password } }) {
      id
      nama_admin
      username
      password
    }
  }
`;

// Query Kategori Wisata Alam
export const GET_WISATA_ALAM = gql`
  query getWisataAlam {
    wisata(order_by: { id: asc }, where: { kategori: { _eq: "Alam" } }) {
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

export const GET_WISATA_ALAM_BY_NAME = gql`
  query getWisataAlamByName($nama_wisata: String!) {
    wisata(where: { nama_wisata: { _ilike: $nama_wisata }, kategori: { _eq: "Alam" } }) {
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

// End of Query Kategori Wisata Alam

// Query Kategori Wisata Pantai
export const GET_WISATA_PANTAI = gql`
  query getWisataPantai {
    wisata(order_by: { id: asc }, where: { kategori: { _eq: "Pantai" } }) {
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

export const GET_WISATA_PANTAI_BY_NAME = gql`
  query getWisataPantaiByName($nama_wisata: String!) {
    wisata(where: { nama_wisata: { _ilike: $nama_wisata }, kategori: { _eq: "Pantai" } }) {
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

// End of Query Kategori Wisata Pantai

// Query Kategori Wisata Kuliner
export const GET_WISATA_KULINER = gql`
  query getWisataKuliner {
    wisata(order_by: { id: asc }, where: { kategori: { _eq: "Kuliner" } }) {
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

export const GET_WISATA_KULINER_BY_NAME = gql`
  query getWisataKulinerByName($nama_wisata: String!) {
    wisata(where: { nama_wisata: { _ilike: $nama_wisata }, kategori: { _eq: "Kuliner" } }) {
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

// End of Query Kategori Wisata Kuliner

export const GET_ADMIN_BY_ID = gql`
  query getAdminById($id: Int!) {
    admin(where: { id: { _eq: $id } }) {
      id
      nama_admin
      username
      password
    }
  }
`;

export const GET_ADMIN_BY_USERNAME = gql`
  query getAdminByUsername($username: String!) {
    admin(where: { username: { _eq: $username } }) {
      id
      nama_admin
      username
      password
    }
  }
`;
