import React, { useState, useEffect } from "react";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NaviBar from "../../components/NaviBar";
import Carousel from "react-bootstrap/Carousel";
/** React Router */
import { useNavigate, useLocation } from "react-router-dom";
/** Apollo client */
import { useSubscription } from "@apollo/client";
/** GraphQL */
import { SUBSCRIPTION_POSTS } from "../../GraphQL/Posts/queries";
import Footer from "../../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [isHomePage, setIsHomePage] = useState(false);

  const [postData, setPostData] = useState([]);

  const [offset, setOffset] = useState(0);

  const limit = 12;

  const { loading, error, data } = useSubscription(SUBSCRIPTION_POSTS, {
    variables: {
      offset: offset,
    },
  });

  useEffect(() => {
    if (loading === false && data !== undefined) {
      if (location.pathname === "/") {
        const newData = [...data.posts];
        setPostData(newData);
      } else if (location.pathname === "/sosial") {
        const newData = data.posts.filter((post) => post.kategori === "Sosial");
        setPostData(newData);
      } else if (location.pathname === "/agama") {
        const newData = data.posts.filter((post) => post.kategori === "Agama");
        setPostData(newData);
      } else if (location.pathname === "/budaya") {
        const newData = data.posts.filter((post) => post.kategori === "Budaya");
        setPostData(newData);
      } else if (location.pathname === "/politik") {
        const newData = data.posts.filter((post) => post.kategori === "Politik");
        setPostData(newData);
      }
    }
  }, [data, location]);

  console.log(offset);

  const handleShowMoreButton = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    setIsHomePage(true);
  }, []);
  return (
    <div>
      <NaviBar isHomePage={isHomePage} />
      {loading === false && data && postData ? (
        <div>
          <div>
            {location.pathname === "/" ? (
              <Carousel>
                {data.posts.slice(0, 3).map((post, itemIdx) => (
                  <Carousel.Item onClick={() => handleShowMoreButton(post.id)} key={itemIdx}>
                    <img className="d-block carousel_img" src={post.post_banner} alt="First slide" />
                    <Carousel.Caption>
                      <h3>{post.judul}</h3>
                      <p>{post.user.nama}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              ""
            )}
          </div>
          <div className="m-3">
            <h5>Postingan Terbaru</h5>
          </div>
          <div className="row m-3 content_home">
            {postData.map((post, postIdx) => (
              <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                <Card className="card_post" style={{ width: "18rem" }} key={postIdx}>
                  <Card.Img variant="top" className="card_img" src={post.post_banner} />
                  <Card.Body>
                    <div className="mb-3 px-2 py-1 rounded-pill category_bg">
                      <p>{post.kategori}</p>
                    </div>
                    <p className="mb-2">{post.judul}</p>
                    <Button onClick={() => handleShowMoreButton(post.id)} className="bg_primary">
                      Show More
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          {data.posts.length === 12 ? (
            offset === 0 ? (
              <div className="row m-3">
                <div className="col">
                  <button onClick={() => setOffset(offset + limit)} className="btn btn-sm bg_primary">
                    Halaman selanjutnya
                  </button>
                </div>
              </div>
            ) : (
              <div className="row m-3">
                <div className="col">
                  <button onClick={() => setOffset(offset - limit)} className="btn btn-sm bg_primary">
                    Halaman sebelumnya
                  </button>
                </div>
                <div className="col">
                  <button onClick={() => setOffset(offset + limit)} className="btn btn-sm bg_primary">
                    Halaman selanjutnya
                  </button>
                </div>
              </div>
            )
          ) : (
            <div className="row m-3">
              <div className="col">
                <button onClick={() => setOffset(offset - limit)} className="btn btn-sm bg_primary">
                  Halaman sebelumnya
                </button>
              </div>
            </div>
          )}
          <Footer />
        </div>
      ) : (
        <div className="loader">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
