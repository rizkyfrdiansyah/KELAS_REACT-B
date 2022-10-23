import React from "react";

const TableUlasan = ({ idx, id, nama, email, ulasan, onDeleteData }) => {
  return (
    <>
      <td className="text-center">{idx + 1}</td>
      <td>{nama}</td>
      <td>{email}</td>
      <td>{ulasan}</td>
      <td className="text-center">
        <button className="btn btn-outline-danger" onClick={onDeleteData}>
          Delete
        </button>
      </td>
    </>
  );
};

export default TableUlasan;
