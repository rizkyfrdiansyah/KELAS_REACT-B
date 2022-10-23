import { gql } from "@apollo/client";

export const GET_NEW_WISATA = gql`
  subscription getNewWisata {
    wisata(limit: 3, order_by: { id: desc }) {
      id
      nama_wisata
      kategori
      alamat
      deskripsi
      gambar
    }
  }
`;

export const GET_NEW_BERITA = gql`
  subscription getNewBerita {
    berita(order_by: { id: desc }) {
      id
      judul
      tgl_posting
      gambar
      deskripsi
    }
  }
`;

export const GET_WISATA_ALAM_SUBS = gql`
  subscription getWisataAlam {
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

export const GET_WISATA_PANTAI_SUBS = gql`
  subscription getWisataAlam {
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

export const GET_WISATA_KULINER_SUBS = gql`
  subscription getWisataAlam {
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
