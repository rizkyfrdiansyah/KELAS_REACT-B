import React from "react";
import { Link } from "react-router-dom";

const TableBerita = ({ idx, gambar, id, judul, deskripsi, tgl_posting, onDeleteData }) => {
  return (
    <>
      <td className="text-center">{idx + 1}</td>
      <td>
        <img src={gambar} alt="gbr kelola" style={{ height: "50px", width: "80px", borderRadius: "10px" }} />
      </td>
      <td>{judul}</td>
      <td>{deskripsi.substr(0, 50)}</td>
      <td className="text-center">
        {tgl_posting.substr(8, 2)}{" "}
        {tgl_posting.substr(5, 2) === "01"
          ? "Januari"
          : tgl_posting.substr(5, 2) === "02"
          ? "Februari"
          : tgl_posting.substr(5, 2) === "03"
          ? "Maret"
          : tgl_posting.substr(5, 2) === "04"
          ? "April"
          : tgl_posting.substr(5, 2) === "05"
          ? "Mei"
          : tgl_posting.substr(5, 2) === "06"
          ? "Juni"
          : tgl_posting.substr(5, 2) === "07"
          ? "Juli"
          : tgl_posting.substr(5, 2) === "08"
          ? "Agustus"
          : tgl_posting.substr(5, 2) === "09"
          ? "September"
          : tgl_posting.substr(5, 2) === "10"
          ? "Oktober"
          : tgl_posting.substr(5, 2) === "11"
          ? "November"
          : "Desember"}{" "}
        {tgl_posting.substr(0, 4)}
      </td>
      <td className="text-end">
        <Link to={`ubah-berita/${id}`} className="btn btn-outline-primary">
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

export default TableBerita;
