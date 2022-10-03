import React from "react";

const index = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Seminyak%2C_Bali.jpg"} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={"https://a.cdn-hotels.com/gdcs/production18/d1683/6b6d8847-b30a-4b72-8603-d1871e65e811.jpg"} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={"https://1nsw6u.akamaized.net/application/files/2114/8594/5588/alila-seminyak-panoramic.jpg"} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default index;
