import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
import TableAdmin from "../../components/TableAdmin";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";

// Hasura GraphQL Queries
import { GET_LISTADMIN } from "../../graphql/queries";

// Hasura GraphQL Mutations
import { DELETE_ADMIN_BY_ID } from "../../graphql/mutations";

// Third Party
import Swal from "sweetalert2";

const KelolaAdmin = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTADMIN);

  const [deleteAdmin, { loading: loadingDeleteAdmin }] = useMutation(DELETE_ADMIN_BY_ID, {
    onCompleted: (data) => {
      refetch();
    },
    onError: (error) => {
      console.log("Error in mutation delete", { error });
    },
  });

  const onDeleteData = (idx) => {
    Swal.fire({
      title: "Yakin hapus data ini?",
      text: "Kamu tidak dapat mengembalikan data yang telah dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAdmin({
          variables: {
            id: idx,
          },
        });
        Swal.fire("Berhasil!", "Data berhasil dihapus.", "success");
      } else {
        Swal.fire("Batal", "Data batal dihapus", "error");
      }
    });
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <main>
          <section className="recent">
            <div className="activity-grid">
              <div className="activity-card">
                <Link to="input-admin" className="btn btn-primary my-2 ms-2 btn-tambah-admin">
                  Tambah Admin
                </Link>
                <div className="table-responsive">
                  {loading ? (
                    <LoadingSvg />
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th className="text-center" style={{ width: "15%" }}>
                            No
                          </th>
                          <th>Nama Admin</th>
                          <th>Username</th>
                          <th className="text-center" colSpan={2} style={{ width: "35%" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.admin.map((value, valueIdx) => (
                          <tr key={valueIdx} data-key={value.id}>
                            <TableAdmin idx={valueIdx} id={value.id} nama_admin={value.nama_admin} username={value.username} password={value.password} onDeleteData={() => onDeleteData(value.id)} />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default KelolaAdmin;
