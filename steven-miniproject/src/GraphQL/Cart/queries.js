import { gql } from "@apollo/client";

export const INSERT_KERANJANG = gql`
  mutation addKeranjang($keranjang: keranjang_insert_input!) {
    insert_keranjang(objects: [$keranjang]) {
      returning {
        id
        jumlah
        total_harga
        productId
        namaProduct
        harga
      }
    }
  }
`;

export const GET_KERANJANG_PRODUCT_ID = gql`
  query getKeranjangByProductId($productId: Int!) {
    keranjang(where: { productId: { _eq: $productId } }) {
      id
      jumlah
      total_harga
      productId
      namaProduct
    }
  }
`;

export const UPDATE_KERANJANG = gql`
  mutation updateKeranjang($id: Int!, $jumlah: Int!, $total_harga: Int!) {
    update_keranjang_by_pk(pk_columns: { id: $id }, _set: { jumlah: $jumlah, total_harga: $total_harga }) {
      id
    }
  }
`;

export const UPDATE_JUMLAH = gql`
  mutation updateJumlah($id: Int!, $jumlah: Int = 10, $total_harga: Int = 10) {
    update_keranjang(where: { id: { _eq: $id } }, _set: { jumlah: $jumlah, total_harga: $total_harga }) {
      returning {
        id
        jumlah
        harga
        total_harga
      }
    }
  }
`;

export const GET_KERANJANG = gql`
  subscription getKeranjang {
    keranjang {
      productId
      jumlah
      total_harga
      namaProduct
      harga
      id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int!) {
    delete_product_by_pk(id: $id) {
      id
      namaProduct
    }
  }
`;
