import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
import TableWisata from "../../components/TableWisata";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";

// Hasura GraphQL Queries
import { GET_LISTWISATA } from "../../graphql/queries";

// Hasura GraphQL Mutations
import { DELETE_WSIATA_BY_ID } from "../../graphql/mutations";

// Third Party
import Swal from "sweetalert2";

const KelolaWisata = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTWISATA);

  const [deleteWisata, { loading: loadingDeleteWisata }] = useMutation(DELETE_WSIATA_BY_ID, {
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
        deleteWisata({
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
                <Link to="input-wisata" className="btn btn-primary my-2 ms-2 btn-tambah-wisata">
                  Tambah Wisata
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
                          <th className="text-center" style={{ width: "15%" }}>
                            Nama Wisata
                          </th>
                          <th className="text-center" style={{ width: "5%" }}>
                            Kategori
                          </th>
                          <th className="text-center" style={{ width: "15%" }}>
                            Alamat
                          </th>
                          <th className="text-center">Deskripsi</th>
                          <th className="text-center" colSpan={2} style={{ width: "10%" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.wisata.map((value, valueIdx) => (
                          <tr key={valueIdx} data-key={value.id}>
                            <TableWisata
                              idx={valueIdx}
                              id={value.id}
                              gambar={value.gambar}
                              nama_wisata={value.nama_wisata}
                              kategori={value.kategori}
                              alamat={value.alamat}
                              deskripsi={value.deskripsi}
                              onDeleteData={() => onDeleteData(value.id)}
                            />
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

export default KelolaWisata;
