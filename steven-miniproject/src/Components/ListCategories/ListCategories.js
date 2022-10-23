import { useSubscription } from "@apollo/client";
import { useState } from "react";
import { ListGroup, Col, Card, Button } from "react-bootstrap";
import { GET_CATEGORIES, GET_BY_CATEGORIES } from "../../GraphQL/ListCategories/queries";
import { numberWithCommas } from "../../Util/numberCommas";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

// react icons
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

function ListCategories() {
  const { data, loading, error } = useSubscription(GET_CATEGORIES);

  const Icon = ({ nama }) => {
    if (nama === "Moisturizer") return <RiIcons.RiInkBottleFill className="mr-2" />;
    if (nama === "Toner") return <FaIcons.FaWineBottle className="mr-2" />;
    if (nama === "Sunscreen") return <BsIcons.BsSun className="mr-2" />;
  };

  return (
    <div>
      <Navbar />
      <Col md={2}>
        <h4>
          <strong>Kategori Skincare</strong>
        </h4>
        {loading === true ? (
          <h1>lagi loading</h1>
        ) : loading === false && data ? (
          <ListGroup>
            {data.categories.map((category, index) => (
              <div>
                <Link to={"/categories/" + category.nama}>
                  <ListGroup.Item key={category.id}>
                    <Icon nama={category.nama} />
                    {category.nama}{" "}
                  </ListGroup.Item>
                </Link>
              </div>
            ))}
          </ListGroup>
        ) : (
          <></>
        )}
      </Col>
    </div>
  );
}

export default ListCategories;
