import "./TrendingPlaces.css";
import React, { useState } from "react";
import { gql, useQuery, useLazyQuery, useMutation, useSubscription } from "@apollo/client";

function TrendingPlaces() {
  const GetTrendingPlaces = gql`
    query MyQuery {
      Places(limit: 8, order_by: { like: desc }) {
        id
        name
        desc
        city
        category
        province
        like
        img_url
      }
    }
  `;

  // Buat Data Query
  const { data: dataTrendingPlaces, loading: loadingQuery } = useQuery(GetTrendingPlaces);
  // cek dataTrendingPlaces
  console.info(dataTrendingPlaces);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h1>
            <strong>Trending Places</strong>
          </h1>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4 mt-0 ms-1">
          {dataTrendingPlaces?.Places.map((trendingPlaces) => (
            <>
              <div className="col d-flex justify-content-center">
                <div data-aos="zoom-in-up" data-aos-duration="2000">
                  <div className="card shadow bg-white rounded">
                    <img src={trendingPlaces.img_url} className="card-img-top" id="size-foto" alt={trendingPlaces.name} />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title fw-bold mb-3">{trendingPlaces.name}</h5>
                        <div className="d-flex ps-2">
                          <i className="bi bi-heart-fill" id="icon-like"></i>
                          <p className="fs-6 ps-2">{trendingPlaces.like}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <a href={`/DetailsPlaces/${trendingPlaces.id}/${trendingPlaces.category}`} className="btn text-center" id="btn-details">
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
    </>
  );
}

export default TrendingPlaces;
