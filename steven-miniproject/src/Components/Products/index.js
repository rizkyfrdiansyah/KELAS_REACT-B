import "./Products.css";
import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useSubscription } from "@apollo/client";
import { GET_PRODUCTS } from "./../../GraphQL/Products/queries";
import { numberWithCommas } from "../../Util/numberCommas";
import { useEffect } from "react";
import { GET_BY_CATEGORIES } from "../../GraphQL/ListCategories/queries";

function Products({ category, setCategory, masukKeranjang }) {
  const getProducts = useSubscription(GET_PRODUCTS);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (category == "all") {
      setData(getProducts.data?.products);
    } else {
      setData(getProducts.data?.products.filter((product, index) => product.category == category));
    }
  }, [category, getProducts.loading]);

  return (
    <div>
      {getProducts.loading === true ? (
        <img
          src="assets\images\loading-animation\loading2.svg"
          style={{
            width: "500px",
            filter: "blur()",
            marginLeft: "18rem",
            marginTop: "3rem",
          }}
        />
      ) : getProducts.loading === false && data ? (
        <Row>
          {data?.map((product, productIdx) => (
            <Col md={3} xs={4}>
              <Card className="shadow">
                <Card.Img className="image" variant="top" src={"assets/images/" + product.category + "/" + product.gambar} />
                <Card.Body>
                  <Card.Title key={productIdx}>{product.nama}</Card.Title>
                  <Card.Text>Rp. {numberWithCommas(product.harga)}</Card.Text>
                  <Button variant="primary" onClick={() => masukKeranjang(product)}>
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Products;
