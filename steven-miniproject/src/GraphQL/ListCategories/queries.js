import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  subscription getCategory {
    categories {
      id
      nama
    }
  }
`;

export const GET_BY_CATEGORIES = gql`
  subscription getProductsByCategory($urlparams: String = "") {
    categories(where: { nama: { _eq: $urlparams } }) {
      products {
        harga
        id
        is_ready
        kode
        nama
        category
        gambar
      }
    }
  }
`;
