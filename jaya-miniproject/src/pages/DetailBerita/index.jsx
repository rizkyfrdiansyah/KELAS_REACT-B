import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
// Apollo Client
import { useQuery } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_BERITA_BY_ID } from "../../graphql/queries";

import { useParams } from "react-router-dom";

// TawkTo
import TawkTo from "tawkto-react";

const DetailBerita = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_BERITA_BY_ID, {
    variables: { id: id },
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
  });

  // console.log("ini data berita", data);

  useEffect(() => {
    var tawk = new TawkTo("62850c19b0d10b6f3e72dfbe", "1g3brehf6");

    tawk.onStatusChange((status) => {
      // console.log(status)
    });
  }, []);

  return (
    <>
      <Navbar />

      {loading ? (
        <div className="loading-animation">
          <LoadingSvg />
        </div>
      ) : (
        <>
          {data?.berita.map((value, valueIdx) => (
            <div className="container mt-5 pt-5 mb-5 pb-5" key={valueIdx}>
              <div className="row">
                <div className="col-12 col-lg-12 mt-1 pt-1">
                  <div className="banner-detail-wisata">
                    <img src={value.gambar} className="detail-berita-image" alt="Detail Berita" />
                  </div>

                  <div className="content-utama">
                    <h3 className="head-title-detail-berita">{value.judul}</h3>
                    <h4 className="address-title">
                      Diposting pada tanggal {value.tgl_posting.substr(8, 2)}{" "}
                      {value.tgl_posting.substr(5, 2) === "01"
                        ? "Januari"
                        : value.tgl_posting.substr(5, 2) === "02"
                        ? "Februari"
                        : value.tgl_posting.substr(5, 2) === "03"
                        ? "Maret"
                        : value.tgl_posting.substr(5, 2) === "04"
                        ? "April"
                        : value.tgl_posting.substr(5, 2) === "05"
                        ? "Mei"
                        : value.tgl_posting.substr(5, 2) === "06"
                        ? "Juni"
                        : value.tgl_posting.substr(5, 2) === "07"
                        ? "Juli"
                        : value.tgl_posting.substr(5, 2) === "08"
                        ? "Agustus"
                        : value.tgl_posting.substr(5, 2) === "09"
                        ? "September"
                        : value.tgl_posting.substr(5, 2) === "10"
                        ? "Oktober"
                        : value.tgl_posting.substr(5, 2) === "11"
                        ? "November"
                        : "Desember"}{" "}
                      {value.tgl_posting.substr(0, 4)}
                    </h4>
                    <p className="deskripsi-1">{value.deskripsi}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default DetailBerita;
