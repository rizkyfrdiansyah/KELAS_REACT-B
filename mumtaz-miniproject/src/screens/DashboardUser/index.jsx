import React, { useState, useEffect } from "react";
/** React Router */
import { useNavigate } from "react-router-dom";
/** Components */
import NaviBar from "../../components/NaviBar";
import Table from "../../components/Table";
/** Apollo client */
import { useMutation, useQuery } from "@apollo/client";
/** GraphQL */
import { GET_POSTS, DELETE_POST } from "../../GraphQL/Posts/queries";

const DashboardUser = () => {
  const tHead = ["No", "Judul", "Aksi"];

  const navigate = useNavigate();

  const [post, setPost] = useState([]);

  const { loading, error, data } = useQuery(GET_POSTS);

  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  useEffect(() => {
    if (loading === false && data !== undefined) {
      const postOneUser = data.posts.filter((post) => post.id_penulis === JSON.parse(localStorage.getItem("user")).id);
      setPost(postOneUser);
    }
  }, [data]);

  const handleNewPostButton = () => {
    navigate("/dashboard-user/add-new-post");
  };

  const [oneAuthor, setOneAuthor] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    } else if (JSON.parse(localStorage.getItem("user")).role === "author") {
      JSON.parse(localStorage.getItem("user")).posts.map((item) => setOneAuthor([item]));
    }
  }, []);

  const [isUserDashboard, setIsUserDashboard] = useState(false);

  useEffect(() => {
    setIsUserDashboard(true);
  }, []);

  return (
    <>
      <NaviBar isUserDashboard={isUserDashboard} />
      <div className="m-3">
        <h1 className="mb-4">Dashboard</h1>
        <button onClick={handleNewPostButton} className="btn bg_primary">
          Add New Post
        </button>
        {oneAuthor !== [] ? (
          <div className="m-3">
            <Table data={post} tHead={tHead} isUserDashboard={isUserDashboard} deletePost={deletePost} />
          </div>
        ) : (
          <div className="loader">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardUser;
