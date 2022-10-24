import "./DetailsCity.css";
import React, { useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import Subscribe from "../../Component/Subscribe/Subscribe";
import { useParams } from "react-router-dom";

function DetailsCity() {
  const GetDataCities = gql`
    query MyQuery($name: String) {
      Top_Cities(where: { name: { _eq: $name } }) {
        id
        img_url
        name
        desc
      }
    }
  `;

  const GetPopularPlaces = gql`
    query MyQuery($city: String) {
      Places(limit: 4, where: { city: { _eq: $city } }) {
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

  // const { id, kota } = useParams();
  const params = useParams();
  console.info("id: ", params.id);
  console.info("kota:", params.kota);

  const [GetDetailsCities, { data: dataCities, loading: loadingCities }] = useLazyQuery(GetDataCities);
  const [GetPopularPlacesInCity, { data: dataPopularPlaces, loading: loadingPlaces }] = useLazyQuery(GetPopularPlaces);
  // const [id, setId] = useState(params.id);
  // const [kota, setKota] = useState(params.kota);

  useEffect(() => {
    GetDetailsCities({ variables: { name: params.kota } });
    GetPopularPlacesInCity({ variables: { city: params.kota } });
  }, []);

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

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div data-aos="fade-up" data-aos-duration="2000">
          {console.log(dataCities)}
          {console.log(dataPopularPlaces)}
          {dataCities?.Top_Cities.map((cities) => (
            <>
              <div className="mt-5">
                <img className="mt-5 shadow-lg bg-white rounded" id="size-img" src={cities.img_url} alt={cities.img_url} />
              </div>
              <div className="row mt-4 mb-2">
                <h1>
                  <strong>{cities.name}</strong>
                </h1>
              </div>
              <div className="row col-auto">
                <p className="fs-6">{cities.desc}</p>
              </div>
            </>
          ))}
          <div className="container mt-2 mb-5">
            <div className="row">
              {dataCities?.Top_Cities.map((cities) => (
                <h1 className="mb-2 px-0">
                  <strong>Popular Places Around {cities.name}</strong>
                </h1>
              ))}
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-0 px-0">
              {dataPopularPlaces?.Places.map((popularPlaces) => (
                <>
                  <div className="col d-flex justify-content-center">
                    <div data-aos="zoom-in-up" data-aos-duration="2000">
                      <div className="card shadow bg-white rounded">
                        <img src={popularPlaces.img_url} className="card-img-top" id="size-foto" alt={popularPlaces.name} />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <h5 className="card-title fw-bold mb-3">{popularPlaces.name}</h5>
                            <div className="d-flex ps-2">
                              <i className="bi bi-heart-fill" id="icon-like"></i>
                              <p className="fs-6 ps-2">{popularPlaces.like}</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <a href={`/DetailsPlaces/${popularPlaces.id}/${popularPlaces.category}`} className="btn text-center" id="btn-details">
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

export default DetailsCity;
