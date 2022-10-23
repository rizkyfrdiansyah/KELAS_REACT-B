import React, { useState, useEffect } from "react";
/** React Router */
import { useParams, useLocation } from "react-router-dom";
/** Apollo client */
import { useQuery } from "@apollo/client";
/** GraphQL */
import { GET_POSTS } from "../../GraphQL/Posts/queries";
import NaviBar from "../../components/NaviBar";
/** React Quill */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import Footer from "../../components/Footer";

const DetailArticle = () => {
  const { id } = useParams();

  const location = useLocation();

  const [postData, setPostData] = useState({});

  const [isHomePage, setIsHomePage] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    onCompleted: (data) => {},
  });

  useEffect(() => {
    if (loading === false && data !== undefined) {
      const newData = data.posts.filter((post) => post.id === parseInt(id));
      console.log(data);
      setPostData(newData[0]);
    }
  }, [data, location]);

  useEffect(() => {
    setIsHomePage(true);
  }, []);

  console.log(postData);

  return (
    <div>
      <NaviBar isHomePage={isHomePage} />
      {loading === false && data !== undefined && postData !== undefined && postData.user !== undefined ? (
        <>
          <div>
            <div className="row">
              <div className="col mx-3 my-3 p-2 rounded bg_primary card_title">
                <span>{postData.judul}</span>
              </div>
            </div>
            <div className="row">
              <div className="col mx-3 p-2 rounded card_content">
                <img src={postData.post_banner} alt={postData.judul} className="img-fluid rounded detail_post_banner" />
                <div className="card_info bg_primary mt-2 p-2 rounded">
                  <span>
                    <b>Penulis : </b> {postData.user.nama}, <b>Diupload pada : </b> {new Date(postData.tgl_upload).getDate()}-{new Date(postData.tgl_upload).getMonth() + 1}-{new Date(postData.tgl_upload).getFullYear()}
                  </span>
                </div>
                <div className="my-2 bg_isi p-2 rounded">
                  {/* {postData[0].isi} */}
                  <ReactQuill value={postData.isi} readOnly={true} theme={"bubble"} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
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

export default DetailArticle;
