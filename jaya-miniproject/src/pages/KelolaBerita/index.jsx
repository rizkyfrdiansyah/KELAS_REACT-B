import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
import TableBerita from "../../components/TableBerita";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";

// Hasura GraphQL Queries
import { GET_LISTBERITA } from "../../graphql/queries";

// Hasura GraphQL Mutations
import { DELETE_BERITA_BY_ID } from "../../graphql/mutations";

// Third Party
import Swal from "sweetalert2";

const KelolaBerita = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTBERITA);

  const [deleteBerita, { loading: loadingDeleteBerita }] = useMutation(DELETE_BERITA_BY_ID, {
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
        deleteBerita({
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
                <Link to="input-berita" className="btn btn-primary my-2 ms-2 btn-tambah-berita">
                  Tambah Berita
                </Link>
                <div className="table-responsive">
                  {loading ? (
                    <LoadingSvg />
                  ) : (
                    <table>
                      <thead>
                        <tr>
                          <th className="text-center" style={{ width: "5%" }}>
                            No
                          </th>
                          <th className="text-center">Gambar</th>
                          <th className="text-center" style={{ width: "25%" }}>
                            Judul Berita
                          </th>
                          <th className="text-center">Deskripsi</th>
                          <th className="text-center" style={{ width: "15%" }}>
                            Tanggal Posting
                          </th>
                          <th className="text-center" colSpan={2} style={{ width: "20%" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.berita.map((value, valueIdx) => (
                          <tr key={valueIdx} data-key={value.id}>
                            <TableBerita idx={valueIdx} id={value.id} gambar={value.gambar} judul={value.judul} deskripsi={value.deskripsi} tgl_posting={value.tgl_posting} onDeleteData={() => onDeleteData(value.id)} />
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

export default KelolaBerita;
