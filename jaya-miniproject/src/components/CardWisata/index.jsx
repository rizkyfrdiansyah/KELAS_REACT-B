import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSvg from "../LoadingSvg/LoadingSvg";
// Apollo Client
import { useQuery, useLazyQuery } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTWISATA, GET_WISATA_BY_NAME, GET_WISATA_ALAM, GET_WISATA_ALAM_BY_NAME, GET_WISATA_PANTAI, GET_WISATA_PANTAI_BY_NAME, GET_WISATA_KULINER, GET_WISATA_KULINER_BY_NAME } from "../../graphql/queries";

import useSubscriptionWisataByAlam from "../../hooks/useSubscriptionWisataByAlam";

import useSubscriptionWisataByPantai from "../../hooks/useSubscriptionWisataByPantai";

import useSubscriptionWisataByKuliner from "../../hooks/useSubscriptionWisataByKuliner";

import { useLocation } from "react-router-dom";

const CardWisata = () => {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState("");

  const { data, loading, error, refetch } = useQuery(GET_LISTWISATA, {
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
  });

  const { data_alam, loading_alam, error_alam } = useSubscriptionWisataByAlam();

  const { data_pantai, loading_pantai, error_pantai } = useSubscriptionWisataByPantai();

  const { data_kuliner, loading_kuliner, error_kuliner } = useSubscriptionWisataByKuliner();

  const [getWisata, { data: dataByName, loading: loadingByName }] = useLazyQuery(GET_WISATA_BY_NAME, {
    onCompleted: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      // console.log(error);
    },
  });

  const [get_alam, { data: data_by_alam, loading: loading_by_alam }] = useLazyQuery(GET_WISATA_ALAM_BY_NAME, {
    onCompleted: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      // console.log(error);
    },
  });

  const [get_pantai, { data: data_by_pantai, loading: loading_by_pantai }] = useLazyQuery(GET_WISATA_PANTAI_BY_NAME, {
    onCompleted: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      // console.log(error);
    },
  });

  const [get_kuliner, { data: data_by_kuliner, loading: loading_by_kuliner }] = useLazyQuery(GET_WISATA_KULINER_BY_NAME, {
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
      if (currentPath === "alam") {
        setInitialQuery(false);
        get_alam({ variables: { nama_wisata: `%${title}%` } });
      }

      if (currentPath === "pantai") {
        setInitialQuery(false);
        get_pantai({ variables: { nama_wisata: `%${title}%` } });
      }

      if (currentPath === "kuliner") {
        setInitialQuery(false);
        get_kuliner({ variables: { nama_wisata: `%${title}%` } });
      }
    }
  };

  // useEffect(() => {
  //   console.log("ini loading", loading);
  // }, [loading]);

  // useEffect(() => {
  //   console.log("ini loadingByName", loadingByName);
  // }, [loadingByName]);

  // useEffect(() => {
  //   console.log("ini isInitialQuery", isInitialQuery);
  // }, [isInitialQuery]);

  useEffect(() => {
    setCurrentPath(location.pathname.substring(17, location.pathname.length));
  }, [location]);

  // console.log("ini path", currentPath);

  return (
    <>
      <div className="section-section mb-4">
        <div className="row">
          <div className="col-md-3 mt-1">
            <input onChange={onChangeTitle} value={title} placeholder="Cari Wisata" autoFocus type="text" className="form-control searchbyname-input" />
          </div>
          <div className="col-md-2 mt-1">
            <button type="submit" className="btn btn-primary btn-search" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      {loading || loadingByName || loading_alam || loading_by_alam || loading_pantai || loading_by_pantai || loading_kuliner || loading_by_kuliner ? (
        <LoadingSvg />
      ) : isInitialQuery ? (
        <div className="main-contents">
          {currentPath === "alam" ? (
            <div className="row row-cols-1 row-cols-md-3">
              {data_alam?.wisata.map((value, valueIdx) => (
                <div className="col mb-4" key={valueIdx}>
                  <div className="card card-wista">
                    <img src={value.gambar} className="card-img-top img-wisata" alt="Wisata Alam" />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`detail-wisata/${value.id}`} className="link-title-wisata">
                          {value.nama_wisata}
                        </Link>
                      </h5>
                      <p className="card-text text-justify">{value.deskripsi.substr(0, 100)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : currentPath === "pantai" ? (
            <div className="row row-cols-1 row-cols-md-3">
              {data_pantai?.wisata.map((value, valueIdx) => (
                <div className="col mb-4" key={valueIdx}>
                  <div className="card card-wista">
                    <img src={value.gambar} className="card-img-top img-wisata" alt="Wisata Alam" />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`detail-wisata/${value.id}`} className="link-title-wisata">
                          {value.nama_wisata}
                        </Link>
                      </h5>
                      <p className="card-text text-justify">{value.deskripsi.substr(0, 100)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-3">
              {data_kuliner?.wisata.map((value, valueIdx) => (
                <div className="col mb-4" key={valueIdx}>
                  <div className="card card-wista">
                    <img src={value.gambar} className="card-img-top img-wisata" alt="Wisata Alam" />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`detail-wisata/${value.id}`} className="link-title-wisata">
                          {value.nama_wisata}
                        </Link>
                      </h5>
                      <p className="card-text text-justify">{value.deskripsi.substr(0, 100)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="main-content-by-category">
          {currentPath === "alam" ? (
            <div className="cards-wisata">
              {data_by_alam?.wisata.length === 0 ? (
                <div>
                  <h1>Data Tidak Ditemukan</h1>
                </div>
              ) : (
                <div className="row row-cols-1 row-cols-md-3">
                  {data_by_alam?.wisata.map((value, valueIdx) => (
                    <div className="col mb-4" key={valueIdx}>
                      <div className="card card-wista">
                        <img src={value.gambar} className="card-img-top img-wisata" alt="Wisata Alam" />
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link to={`detail-wisata/${value.id}`} className="link-title-wisata">
                              {value.nama_wisata}
                            </Link>
                          </h5>
                          <p className="card-text text-justify">{value.deskripsi.substr(0, 100)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : currentPath === "pantai" ? (
            <>
              {data_by_pantai?.wisata.length === 0 ? (
                <div>
                  <h1>Data Tidak Ditemukan</h1>
                </div>
              ) : (
                <div className="row row-cols-1 row-cols-md-3">
                  {data_by_pantai?.wisata.map((value, valueIdx) => (
                    <div className="col mb-4" key={valueIdx}>
                      <div className="card card-wista">
                        <img src={value.gambar} className="card-img-top img-wisata" alt="Wisata Alam" />
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link to={`detail-wisata/${value.id}`} className="link-title-wisata">
                              {value.nama_wisata}
                            </Link>
                          </h5>
                          <p className="card-text text-justify">{value.deskripsi.substr(0, 100)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {data_by_kuliner?.wisata.length === 0 ? (
                <div>
                  <h1>Data Tidak Ditemukan</h1>
                </div>
              ) : (
                <div className="row row-cols-1 row-cols-md-3">
                  {data_by_kuliner?.wisata.map((value, valueIdx) => (
                    <div className="col mb-4" key={valueIdx}>
                      <div className="card card-wista">
                        <img src={value.gambar} className="card-img-top img-wisata" alt="Wisata Alam" />
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link to={`detail-wisata/${value.id}`} className="link-title-wisata">
                              {value.nama_wisata}
                            </Link>
                          </h5>
                          <p className="card-text text-justify">{value.deskripsi.substr(0, 100)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CardWisata;
