import React from "react";
import { Link } from "react-router-dom";

const TableWisata = ({ idx, id, gambar, nama_wisata, kategori, alamat, deskripsi, onDeleteData }) => {
  return (
    <>
      <td className="text-center">{idx + 1}</td>
      <td>
        <img src={gambar} alt="gbr kelola" style={{ height: "50px", width: "80px", borderRadius: "10px" }} />
      </td>
      <td>{nama_wisata}</td>
      <td className="text-center">{kategori}</td>
      <td>{alamat}</td>
      <td>{deskripsi.substr(0, 50)}</td>
      <td className="text-end">
        <Link to={`ubah-wisata/${id}`} className="btn btn-outline-primary">
          Update
        </Link>
      </td>
      <td className="text-start">
        <button className="btn btn-outline-danger" onClick={onDeleteData}>
          Delete
        </button>
      </td>
    </>
  );
};

export default TableWisata;
