import "./InputSearch.css";
import React, { useState } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

function InputSearch() {
  const GetAllDataPlaces = gql`
    query MyQuery {
      Places(limit: 12) {
        id
        name
        city
        province
        category
        desc
        img_url
        like
      }
    }
  `;
  const SearchDataPlaces = gql`
    query MyQuery($nama: String) {
      Places(where: { name: { _eq: $nama } }) {
        id
        name
        desc
        category
        city
        province
        img_url
        like
      }
    }
  `;

  // Buat Data Query
  const { data: dataAllPlaces, loading: loadingQuery } = useQuery(GetAllDataPlaces);
  // cek dataAllPlaces
  console.info(dataAllPlaces);

  // Buat Pengolahan data Lazy Query Nama Places
  const [namaPlaces, setNamaPlaces] = useState("");
  const [statusSearch, setStatusSearch] = useState(false);
  const [GetDataPlaces, { data: dataPlacesSearch, loading: loadingPlaces }] = useLazyQuery(SearchDataPlaces);

  // cek inputan user
  const onChangeSearch = (e) => {
    setNamaPlaces(e.target.value);
    console.info(namaPlaces);
  };

  // handle button search places
  const onClickSearch = () => {
    GetDataPlaces({ variables: { nama: namaPlaces } });
    setStatusSearch(true);
    console.info("data search", dataPlacesSearch);
  };

  // if (loadingPlaces) {
  //     return (
  //       <div className='container'>
  //         <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
  //           <circle className='' fill="#142A49" stroke="none" cx={43} cy={30} r={3}>
  //             <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
  //           </circle>
  //           <circle className='' fill="#142A49" stroke="none" cx={50} cy={30} r={3}>
  //             <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
  //           </circle>
  //           <circle className='' fill="#142A49" stroke="none" cx={57} cy={30} r={3}>
  //             <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
  //           </circle>
  //         </svg>
  //       </div>
  //     )
  // }

  return (
    <>
      <div className="container mt-5 mb-5">
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="row text-center">
            <h1>
              <strong>Find Tourist Attractions</strong>
            </h1>
          </div>
          <div className="row mt-4 d-flex justify-content-center">
            <div className="col-md-6 col-sm-9 pe-0">
              <div className="input-group input-group-lg" id="input-email">
                <input type="text" className="form-control" id="size-input" aria-label="Sizing example input" onChange={onChangeSearch} aria-describedby="inputGroup-sizing-lg" placeholder="Search Places Here..." />
              </div>
            </div>
            <div className="col-md-2 col-sm-3 ps-1">
              <button type="button" className="btn btn-lg" id="new-btn-primary" onClick={onClickSearch}>
                &emsp;&emsp;Search&emsp;&emsp;
              </button>
            </div>
          </div>
          <div className="container mt-3">
            {statusSearch ? (
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 mt-0 ms-1">
                {dataPlacesSearch?.Places.map((searchPlaces) => (
                  <>
                    <div className="col d-flex justify-content-center">
                      <div data-aos="fade-up" data-aos-duration="2000">
                        <div className="card shadow bg-white rounded">
                          <img src={searchPlaces.img_url} className="card-img-top" id="size-foto" alt={searchPlaces.name} />
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <h5 className="card-title fw-bold mb-3">{searchPlaces.name}</h5>
                              <div className="d-flex ps-2">
                                <i className="bi bi-heart-fill" id="icon-like"></i>
                                <p className="fs-6 ps-2">{searchPlaces.like}</p>
                              </div>
                            </div>
                            <div className="text-center">
                              <a href={`/DetailsPlaces/${searchPlaces.id}/${searchPlaces.category}`} className="btn text-center" id="btn-details">
                                See Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ) : (
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 mt-0 ms-1">
                {dataAllPlaces?.Places.map((places) => (
                  <>
                    <div className="col d-flex justify-content-center">
                      <div data-aos="zoom-in-up" data-aos-duration="2000">
                        <div className="card shadow bg-white rounded">
                          <img src={places.img_url} className="card-img-top" id="size-foto" alt={places.name} />
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <h5 className="card-title fw-bold mb-3">{places.name}</h5>
                              <div className="d-flex ps-2">
                                <i className="bi bi-heart-fill" id="icon-like"></i>
                                <p className="fs-6 ps-2">{places.like}</p>
                              </div>
                            </div>
                            <div className="text-center">
                              <a href={`/DetailsPlaces/${places.id}/${places.category}`} className="btn text-center" id="btn-details">
                                See Details
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default InputSearch;
