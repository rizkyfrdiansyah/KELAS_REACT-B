import "./style.module.css";
import { useLazyQuery, useMutation, useSubscription } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, ListGroup, Modal, Row } from "react-bootstrap";
import Navbar from "../../Components/Navbar/Navbar";
import { DELETE_PRODUCT, GET_KERANJANG, UPDATE_JUMLAH } from "../../GraphQL/Cart/queries";
import { numberWithCommas } from "../../Util/numberCommas";
import { Link } from "react-router-dom";

function Cart(value) {
  const getKeranjangAll = useSubscription(GET_KERANJANG);

  const [deleteProduct, { loading: loadingDelete }] = useMutation(DELETE_PRODUCT, {
    onCompleted: (data) => {},
    onError: (error) => {
      console.log("Terjadi error di mutasi delete", { error });
    },
  });

  const [updateJumlah] = useMutation(UPDATE_JUMLAH, {
    onCompleted: (data) => {},
    onError: (error) => {
      console.log("Terjadi error di mutasi upadateJumlah", { error });
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    setTotalHarga(0);
    const initialValue = 0;
    const updateValue = getKeranjangAll.data?.keranjang.reduce((prevValue, currentValue) => prevValue + currentValue.total_harga, initialValue);
    setTotalHarga(updateValue);
  }, [getKeranjangAll]);

  const [list, setList] = useState([]);

  useEffect(() => {
    if (!getKeranjangAll.loading && getKeranjangAll.data) {
      setList([...getKeranjangAll.data.keranjang]);
    }
  }, [getKeranjangAll.loading, getKeranjangAll.data]);
  console.log("ini list", list);

  const handlePlus = (id) => {
    let idData = list.filter((idx) => idx.id === id);

    updateJumlah({
      variables: {
        id: id,
        jumlah: idData[0].jumlah + 1,
        total_harga: idData[0].total_harga + idData[0].harga,
      },
    });
  };

  const handleMinus = (id) => {
    let idData = list.filter((idx) => idx.id === id);
    console.log("ini idData", idData);
    updateJumlah({
      variables: {
        id: id,
        jumlah: idData[0].jumlah - 1,
        total_harga: idData[0].total_harga - idData[0].harga,
      },
    });
  };

  return (
    <div>
      <Navbar />
      <h1
        style={{
          marginLeft: "16rem",
          marginTop: "3rem",
          marginBottom: "3rem",
          borderBottom: "1px solid #AAAAAA",
          maxWidth: "200px",
        }}
      >
        Shopping Cart
      </h1>
      {getKeranjangAll.loading === true ? (
        <img src="assets\images\loading-animation\infinity.svg" className="loadingg" />
      ) : getKeranjangAll.loading === false && getKeranjangAll.data ? (
        <ListGroup style={{ backgroundColor: "white" }}>
          {getKeranjangAll.data.keranjang.map((keranjangs) => (
            <Container className="cart-list" key={keranjangs.id}>
              <Row>
                <Col>
                  <ListGroup.Item style={{ border: "none" }}>
                    {keranjangs.namaProduct} <br></br>
                    <span>Rp {numberWithCommas(keranjangs.harga)}</span> <br></br>
                    <button onClick={() => handleMinus(keranjangs.id)}>
                      <img
                        src="assets\images\minus.png"
                        style={{
                          filter: "blur()",
                          width: "30px",
                          boxSizing: "border-box",
                          marginLeft: "0",
                        }}
                      />
                    </button>
                    <Badge pill bg="info" text="dark" style={{ width: "30px" }}>
                      {keranjangs.jumlah}
                    </Badge>
                    <button onClick={() => handlePlus(keranjangs.id)} style={{ marginLeft: "0.3rem" }}>
                      <img
                        src="assets\images\plus.png"
                        style={{
                          filter: "blur()",
                          width: "30px",
                          boxSizing: "border-box",
                          marginLeft: "0",
                        }}
                      />
                    </button>
                  </ListGroup.Item>
                </Col>
                <Col style={{ marginTop: "4rem" }}>
                  <strong>Rp {numberWithCommas(keranjangs.total_harga)}</strong>
                </Col>
              </Row>
            </Container>
          ))}
        </ListGroup>
      ) : (
        <></>
      )}

      <div className="fixed-bottom" style={{ marginLeft: "90rem", marginTop: "10rem" }}>
        {" "}
        <h3>Total Bayar: Rp {totalHarga}</h3>
        <Link to="/payment">
          <button
            style={{
              backgroundColor: "#24a0ed",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingRight: "11rem",
              paddingLeft: "11rem",
              marginLeft: "0.5rem",
              width: "100px",
              marginBottom: "1rem",
              fontWeight: "bold",
              fontSize: "20px",
              borderRadius: "30px",
              textAlign: "center",
              color: "white",
            }}
          >
            BAYAR
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
