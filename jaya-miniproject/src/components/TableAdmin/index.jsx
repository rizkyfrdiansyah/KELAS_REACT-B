import React from "react";
import { Link } from "react-router-dom";

const TableAdmin = ({ idx, id, nama_admin, username, password, onDeleteData }) => {
  return (
    <>
      <td className="text-center">{idx + 1}</td>
      <td>{nama_admin}</td>
      <td>{username}</td>
      <td className="text-end">
        <Link to={`ubah-admin/${id}`} className="btn btn-outline-primary">
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

export default TableAdmin;
