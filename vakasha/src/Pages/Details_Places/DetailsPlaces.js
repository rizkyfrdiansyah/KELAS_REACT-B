import React, { useState, useEffect } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import Subscribe from "../../Component/Subscribe/Subscribe";
import { useParams } from "react-router-dom";

function DetailsPlaces() {
  const GetDataPlaces = gql`
    query MyQuery($id: Int) {
      Places(limit: 4, where: { id: { _eq: $id } }) {
        id
        name
        desc
        category
        city
        province
        img_url
        like
        location
      }
    }
  `;

  const GetRecommendPlaces = gql`
    query MyQuery($kategori: String, $id: Int) {
      Places(limit: 4, where: { category: { _eq: $kategori }, _not: { id: { _eq: $id } } }) {
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

  const LikePlaces = gql`
    mutation MyMutation($id: Int, $like: Int = 1) {
      update_Places(where: { id: { _eq: $id } }, _inc: { like: $like }) {
        returning {
          id
          like
        }
        affected_rows
      }
    }
  `;

  const DislikePlaces = gql`
    mutation MyMutation($id: Int, $like: Int = -1) {
      update_Places(where: { id: { _eq: $id } }, _inc: { like: $like }) {
        returning {
          id
          like
        }
        affected_rows
      }
    }
  `;

  // const { id, kota } = useParams();
  const params = useParams();
  console.info("id: ", params.id);
  console.info("kategori:", params.kategori);

  // handle pengolahan data ke graphQL
  const [GetDetailsPlaces, { data: dataPlaces, loading: loadingPlaces }] = useLazyQuery(GetDataPlaces);
  const [GetRecommendPlacesInCity, { data: dataRecommendPlaces, loading: loadingRecommendPlaces }] = useLazyQuery(GetRecommendPlaces);
  useEffect(() => {
    GetDetailsPlaces({ variables: { id: params.id } });
    GetRecommendPlacesInCity({ variables: { kategori: params.kategori, id: params.id } });
  }, []);

  // handle pengolahan data ke graphQL
  const [statusLike, setStatusLike] = useState(true);
  const [SetLikePlaces, { loading: loadingSetLikePlaces }] = useMutation(LikePlaces, {
    refetchQueries: [GetDataPlaces],
  });
  const [SetDislikePlaces, { loading: loadingSetDisliikePlaces }] = useMutation(DislikePlaces, {
    refetchQueries: [GetDataPlaces],
  });

  // handle button like ketika di klik
  const onClickLike = () => {
    SetLikePlaces({ variables: { id: params.id } });
    setStatusLike(!statusLike);
  };
  const onClickDislike = () => {
    SetDislikePlaces({ variables: { id: params.id } });
    setStatusLike(!statusLike);
  };

  if (loadingPlaces) {
    return (
      <div className="container">
        <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
          <circle className="" fill="#142A49" stroke="none" cx={43} cy={30} r={3}>
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
          </circle>
          <circle className="" fill="#142A49" stroke="none" cx={50} cy={30} r={3}>
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
          </circle>
          <circle className="" fill="#142A49" stroke="none" cx={57} cy={30} r={3}>
            <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
          </circle>
        </svg>
      </div>
    );
  }

  console.info("batas log awal setelah refresh");
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div data-aos="fade-up" data-aos-duration="2000">
          {console.log(dataPlaces)}
          {console.log(dataRecommendPlaces)}
          {dataPlaces?.Places.map((places) => (
            <>
              <div className="mt-5">
                <img className="mt-5 shadow-lg bg-white rounded" id="size-img" src={places.img_url} alt={places.img_url} />
              </div>
              <div className="row mt-4 mb-2 ">
                <div className="d-flex justify-content-between">
                  <div className="flex-column">
                    <h1>
                      <strong>{places.name}</strong>
                    </h1>
                    <p className="fs-5" id="color-text">
                      {places.city}, {places.province}
                    </p>
                  </div>
                  <div className="d-flex fs-3">
                    {statusLike ? (
                      <button type="submit" className="btn px-0" onClick={onClickLike}>
                        <i className="bi bi-heart fs-4" id="icon-like"></i>
                      </button>
                    ) : (
                      <button type="submit" className="btn px-0" onClick={onClickDislike}>
                        <i className="bi bi-heart-fill fs-4" id="icon-like"></i>
                      </button>
                    )}
                    {/* <button type="submit" className="btn px-0" onClick={onClickLike}><i className="bi bi-hand-thumbs-up-fill fs-4" id='icon-like'></i></button>
                          <button type="submit" className="btn px-0" onClick={onClickDislike}><i className="bi bi-hand-thumbs-down-fill fs-4 ps-2" id='icon-like'></i></button> */}
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="ps-2 pt-2 mb-2">{places.like} likes</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='row col-auto'>
                        <p className='fs-6'>{places.desc}</p>            
                    </div> */}
              <div className="row ">
                <div className="col-7">
                  <p className="fs-6">{places.desc}</p>
                </div>
                <div className="col-5">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe width={500} height={400} id="gmap_canvas" src={places.location} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="container mt-2 mb-5">
            <div className="row">
              <h1 className="mb-2 px-0">
                <strong>Suggested For You</strong>
              </h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-0 px-0">
              {dataRecommendPlaces?.Places.map((recommendPlaces) => (
                <>
                  <div className="col d-flex justify-content-center">
                    <div data-aos="zoom-in-up" data-aos-duration="2000">
                      <div className="card shadow bg-white rounded">
                        <img src={recommendPlaces.img_url} className="card-img-top" id="size-foto" alt={recommendPlaces.name} />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <h5 className="card-title fw-bold mb-3">{recommendPlaces.name}</h5>
                            <div className="d-flex ps-2">
                              <i className="bi bi-heart-fill" id="icon-like"></i>
                              <p className="fs-6 ps-2">{recommendPlaces.like}</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <a href={`/DetailsPlaces/${recommendPlaces.id}/${recommendPlaces.category}`} className="btn text-center" id="btn-details">
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
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default DetailsPlaces;
