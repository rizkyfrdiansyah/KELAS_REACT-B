import React from "react";
import "./Home.css";
import skincare from "../../image/istockphoto-1306102673-612x612.jpg";
import azarine from "../../image/azarine.jpg";
import Products from "../../Components/Products";
import NavbarComponent from "../../Components/Navbar/Navbar";
// Bootstrap Component
import { Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <div className="prunella">
        <h1 style={{ fontSize: "200px", marginLeft: "-4rem" }}>PRUNELLA</h1>
        <p style={{ fontSize: "50px" }}>Discover What Your Skin Needs</p>
      </div>
      <div className="banner">
        <img src={skincare} className="skincare" />
      </div>

      {/* <div className="border shadow">
        <p> PRODUK TERLARIS</p>
        <Row>
          <Col>
          <img src={azarine} style={{width:"100px"}} />
          </Col>
          <Col>Skintific</Col>
          <Col>Retinol</Col>
        </Row>
      </div> */}
    </div>
  );
}

export default Home;
