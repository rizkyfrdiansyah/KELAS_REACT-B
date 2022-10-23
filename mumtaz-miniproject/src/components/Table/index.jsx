import React from "react";
/** React Router  */
import { Link } from "react-router-dom";
/** Sweetalert2 */
import Swal from "sweetalert2";

const Table = ({ data, tHead, isUserDashboard, deleteAuthor, deletePost }) => {
  console.log(data);

  const handleDeleteAuthorButton = (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Data yang sudah terhapus akan hilang!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAuthor({
          variables: {
            id: id,
          },
        });
        Swal.fire("Data sukses terhapus!", "Data penulis berhasil dihapus.", "success");
      }
    });
  };

  const handleDeletePostButton = (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Postingan yang dihapus akan hilang!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost({
          variables: {
            id: id,
          },
        });
        Swal.fire("Data sukses terhapus!", "Data postingan berhasil dihapus.", "success");
      }
    });
  };

  return (
    <div>
      {
        <div>
          <div className="rounded row bg-dark text-light align-items-center p-2">
            {tHead.map((head, headIdx) =>
              head === "No" ? (
                <div className="col-1 text-center" key={headIdx}>
                  {head}
                </div>
              ) : (
                <div className="col text-center" key={headIdx}>
                  {head}
                </div>
              )
            )}
          </div>
          {tHead.length > 3
            ? data.map((item, itemIdx) => (
                <div className="rounded align-items-center p-2 bg-light row mb-2 card_post" key={itemIdx}>
                  <div className="col-1 text-center">{itemIdx + 1}</div>
                  <div className="col text-center">{item.judul}</div>
                  <div className="col text-center">{item.user.nama}</div>
                  <div className="col text-center">
                    <Link to={`/dashboard/edit-post/${item.id}`} className="btn btn-sm btn-outline-warning mx-2">
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        handleDeletePostButton(item.id);
                      }}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            : // )
            isUserDashboard
            ? data.map((item, itemIdx) => (
                <div className="rounded align-items-center p-2 bg-light row mb-2 card_post" key={itemIdx}>
                  <div className="col-1 text-center">{itemIdx + 1}</div>
                  <div className="col text-center">{item.judul}</div>
                  <div className="col text-center">
                    <Link to={`/dashboard-user/edit-post/${item.id}`} className="btn btn-sm btn-outline-warning mx-2">
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        handleDeletePostButton(item.id);
                      }}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            : data.map((item, itemIdx) => (
                <div className="rounded align-items-center p-2 bg-light row mb-2 card_post" key={itemIdx}>
                  <div className="col-1 text-center">{itemIdx + 1}</div>
                  <div className="col text-center">{item.nama}</div>
                  <div className="col text-center">
                    <Link to={`/dashboard/authors/edit-author/${item.id}`} className="btn btn-sm btn-outline-warning mx-2">
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        handleDeleteAuthorButton(item.id);
                      }}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
        </div>
      }
    </div>
  );
};

export default Table;
