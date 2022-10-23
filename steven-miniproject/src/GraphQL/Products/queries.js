import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  subscription getProducts {
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
`;
