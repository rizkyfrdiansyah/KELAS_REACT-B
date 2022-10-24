import "./PopularCities.css";
import React, { useState } from "react";
import { gql, useQuery, useLazyQuery, useMutation, useSubscription } from "@apollo/client";

function PopularCities() {
  const GetPopularCities = gql`
    query MyQuery {
      Top_Cities {
        desc
        id
        img_url
        name
      }
    }
  `;

  // Buat Data Query
  const { data: dataTopCities, loading: loadingQuery } = useQuery(GetPopularCities);
  // cek dataTopCities
  console.info(dataTopCities);
  return (
    <>
      <div className="container my-5" id="populercity">
        <div className="row">
          <h1 className="mb-5">
            <strong>Popular Cities</strong>
          </h1>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-3">
          {dataTopCities?.Top_Cities.map((cities) => (
            <>
              <div className="col">
                <div data-aos="fade-up" data-aos-duration="2000">
                  <div className="card rounded shadow zoom">
                    <a className="text-decoration-none" href={`/DetailsCity/${cities.id}/${cities.name}`}>
                      <img src={cities.img_url} className="card-img" alt={cities.name} />
                      <div className="card-img-overlay position-absolute top-0 w-100 px-4 text-center d-flex h-100 justify-content-center align-items-end">
                        <h5 className="card-title text-white">{cities.name}</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className='col text-center'>
                  <a className='text-decoration-none' href= {`/DetailsCity/${cities.id}/${cities.name}`}>
                  <img className='img-items rounded-3 shadow bg-white rounded' src={cities.img_url}  alt={cities.name}/>
                    <div className='px-4 text-center d-flex justify-content-center'>
                      <h5 className='color=text text-uppercase fw-bolder pt-2'>{cities.name}</h5>
                    </div>
                  </a>
                </div> */}
              {/* <div className="col">
                  <div className="card rounded">
                    <a className='text-decoration-none' href= {`/DetailsCity/${cities.id}/${cities.name}`}>
                      <img src={cities.img_url} className="card-img-top shadow" id='size-foto' alt={cities.name} />
                      <div className="card-body">
                        <h5 className="card-title fw-bold  text-center">{cities.name}</h5>
                      </div>
                    </a>
                  </div>
                </div> */}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularCities;
