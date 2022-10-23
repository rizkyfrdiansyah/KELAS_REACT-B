import React, { useState } from "react";
import "./categories.css";
import Products from "../../Components/Products";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import ListCategories from "../../Components/ListCategories/ListCategories";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GET_CATEGORIES } from "../../GraphQL/ListCategories/queries";
import { useSubscription, useMutation, useLazyQuery } from "@apollo/client";
import { Row, Col } from "react-bootstrap";
import { GET_KERANJANG_PRODUCT_ID, INSERT_KERANJANG, UPDATE_KERANJANG } from "../../GraphQL/Cart/queries";
import swal from "sweetalert";
// react icons
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

function Categories() {
  const { data, loading, error } = useSubscription(GET_CATEGORIES);

  const Icon = ({ nama }) => {
    if (nama === "Moisturizer") return <RiIcons.RiInkBottleFill className="mr-2" />;
    if (nama === "Toner") return <FaIcons.FaWineBottle className="mr-2" />;
    if (nama === "Sunscreen") return <BsIcons.BsSun className="mr-2" />;
  };

  const [category, setCategory] = useState("all");

  const [getKeranjang, { refetch }] = useLazyQuery(GET_KERANJANG_PRODUCT_ID, {
    onCompleted: (data) => {},
    onError: (error) => {
      console.log("Terjadi error di mutasi insert", { error });
    },
  });

  const [updateKeranjang, { loading: loadingUpdate }] = useMutation(UPDATE_KERANJANG, {
    onCompleted: (data) => {
      refetch();
    },
    onError: (error) => {
      console.log("Terjadi error di mutasi update", { error });
    },
  });

  const [addKeranjang, { loading: loadingInsert }] = useMutation(INSERT_KERANJANG, {
    onCompleted: (data) => {
      refetch();
    },
    onError: (error) => {
      console.log("Terjadi error di mutasi insert", { error });
    },
  });

  const [keranjangs, setKeranjangs] = useState([]);

  const masukKeranjang = async (value) => {
    const response = await getKeranjang({
      variables: {
        productId: value.id,
      },
    });

    if (response.data.keranjang.length === 0) {
      const keranjang = {
        jumlah: 1,
        total_harga: value.harga,
        productId: value.id,
        namaProduct: value.nama,
        harga: value.harga,
      };

      addKeranjang({
        variables: {
          keranjang: {
            jumlah: keranjang.jumlah,
            total_harga: keranjang.total_harga,
            productId: keranjang.productId,
            namaProduct: keranjang.namaProduct,
            harga: keranjang.harga,
          },
        },
      });

      swal({
        title: "Success!",
        text: "Your item is already in the cart!",
        icon: "success",
        button: "Back",
        timer: 1500,
      });
    } else {
      let product = response.data.keranjang.map((item) => {
        if (value.id === item.productId) {
          return {
            jumlah: item.jumlah + 1,
            id: item.id,
            total_harga: value.harga + item.total_harga,
          };
        }
      });

      console.log(product);

      updateKeranjang({
        variables: {
          id: product[0].id,
          jumlah: product[0].jumlah,
          total_harga: product[0].total_harga,
        },
      });

      swal({
        title: "Success!",
        text: "Your item is already in the cart!",
        icon: "success",
        button: "Back",
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Row>
        <Col md={2} className="category">
          <h4>
            <strong>Kategori Skincare</strong>
          </h4>
          {loading ? (
            <>
              <img src="assets\images\loading-animation\loading2.svg" className="loading" />
              <p>Memuat Kategori Skincare...</p>
            </>
          ) : loading === false && data ? (
            <ListGroup className="list-group">
              <ListGroup.Item
                className="list-item"
                onClick={() => {
                  setCategory("all");
                }}
              >
                <GiIcons.GiEternalLove style={{ marginRight: "1rem" }} />
                Semua Produk
              </ListGroup.Item>
              {data.categories.map((category, index) => (
                <ListGroup.Item
                  className="list-item"
                  onClick={() => {
                    setCategory(category.id);
                  }}
                >
                  <Icon nama={category.nama} />
                  {category.nama}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <></>
          )}
        </Col>
        <Col md={9}>
          <Products category={category} setCategory={setCategory} masukKeranjang={masukKeranjang} />
        </Col>
      </Row>
    </div>
  );
}
export default Categories;
