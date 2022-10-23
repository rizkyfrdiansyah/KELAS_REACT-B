import React from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
import TableUlasan from "../../components/TableUlasan";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";

// Hasura GraphQL Queries
import { GET_LISTULASAN } from "../../graphql/queries";

// Hasura GraphQL Mutations
import { DELETE_ULASAN_BY_ID } from "../../graphql/mutations";

// Third Party
import Swal from "sweetalert2";

const KelolaUlasan = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTULASAN);

  const [deleteUlasan, { loading: loadingDeleteUlasan }] = useMutation(DELETE_ULASAN_BY_ID, {
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
        deleteUlasan({
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
                <div className="table-responsive">
                  {loading ? (
                    <LoadingSvg />
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th className="text-center" style={{ width: "10%" }}>
                            No
                          </th>
                          <th className="text-center" style={{ width: "15%" }}>
                            Nama
                          </th>
                          <th className="text-center" style={{ width: "15%" }}>
                            Email
                          </th>
                          <th className="text-center" style={{ width: "40%" }}>
                            Ulasan
                          </th>
                          <th className="text-center" style={{ width: "20%" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.ulasan.map((value, valueIdx) => (
                          <tr key={valueIdx} data-key={value.id}>
                            <TableUlasan idx={valueIdx} id={value.id} nama={value.nama} email={value.email} ulasan={value.ulasan} onDeleteData={() => onDeleteData(value.id)} />
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

export default KelolaUlasan;
