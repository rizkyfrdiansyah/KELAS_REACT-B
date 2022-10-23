import { useSubscription } from "@apollo/client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { GET_PRODUCTS } from "../../GraphQL/Products/queries";

function Payment() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginRight: "20rem", marginTop: "5rem" }}>Thankyou for Ordering!</h1>
      <img
        src="assets\images\undraw_shopping_app_flsj.svg"
        style={{
          width: "800px",
          filter: "blur()",
          marginLeft: "30rem",
          marginTop: "5rem",
          marginBottom: "5rem",
        }}
      ></img>
      <h2 style={{ marginLeft: "20rem" }}>Transfer pembayaranmu ke rekening bank BCA : 2450709240 (Prunella.id)</h2>
      <p style={{ marginLeft: "48rem" }}>
        Kirim bukti pembayaran:{" "}
        <a href="https://api.whatsapp.com/send?phone=6285156861943" target="_blank">
          <img src="assets\images\whatsapp.png" style={{ width: "40px", filter: "blur()", marginLeft: "0" }}></img>
        </a>
      </p>
      <Link to="/">
        <button
          variant="primary"
          style={{
            marginLeft: "50rem",
            backgroundColor: "#24a0ed",
            color: "white",
            padding: "1rem",
            borderRadius: "30px",
            marginBottom: "1rem",
          }}
        >
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
}

export default Payment;
