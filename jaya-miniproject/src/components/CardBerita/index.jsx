import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import LoadingSvg from "../LoadingSvg/LoadingSvg";
// Apollo Client
import { useQuery, useLazyQuery } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTBERITA, GET_BERITA_BY_NAME } from "../../graphql/queries";

const CardBerita = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTBERITA);

  const [getBerita, { data: dataByName, loading: loadingByName }] = useLazyQuery(GET_BERITA_BY_NAME, {
    onCompleted: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      // console.log(error);
    },
  });

  const [title, setTitle] = useState("");

  const [isInitialQuery, setInitialQuery] = useState(true);

  const onChangeTitle = (e) => {
    if (e.target.value === "") {
      setInitialQuery(true);
    }

    if (e.target) {
      setTitle(e.target.value);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (title === "") {
      setInitialQuery(true);
    } else {
      setInitialQuery(false);
      getBerita({ variables: { judul: `%${title}%` } });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="list-card-berita">
      <div className="section-section mb-4">
        <div className="row">
          <div className="col-md-3">
            <input onChange={onChangeTitle} value={title} placeholder="Cari Judul Berita" autoFocus type="text" className="form-control searchbyname-input" />
          </div>
          <div className="col-md-2 mt-1">
            <button type="submit" className="btn btn-primary btn-search" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      {loading || loadingByName ? (
        <LoadingSvg />
      ) : isInitialQuery ? (
        <>
          {data?.berita.map((value, valueIdx) => (
            <div className="card mb-3 card-berita" key={valueIdx}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={value.gambar} className="img-berita" alt="berita images" />
                </div>
                <div className="col-md-8">
                  <div className="card-body ">
                    <h5 className="card-title mt-3">
                      <Link to={`detail-berita/${value.id}`} className="link-title-berita">
                        {value.judul}
                      </Link>
                    </h5>

                    <p className="card-text text-justify desc-text-berita mt-3">{value.deskripsi.substr(0, 450)}</p>
                    <p className="card-text">
                      <small className="text-muted">
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
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {dataByName?.berita.length === 0 ? (
            <div>
              <h1>Data Tidak Ditemukan</h1>
            </div>
          ) : (
            <>
              {dataByName?.berita.map((value, valueIdx) => (
                <div className="card mb-3 card-berita" key={valueIdx}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={value.gambar} className="img-berita" alt="berita images" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ">
                        <Link to={`/berita/detailberita/${value.id}`} className="link-title-wisata">
                          {value.judul}
                        </Link>
                        <p className="card-text text-justify">{value.deskripsi}</p>
                        <p className="card-text">
                          <small className="text-muted">{value.tgl_posting}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CardBerita;
