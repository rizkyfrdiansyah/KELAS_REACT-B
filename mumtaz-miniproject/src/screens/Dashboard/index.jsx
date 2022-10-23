import React, { useState, useEffect } from "react";
/** React Router */
import { useNavigate } from "react-router-dom";
/** Components */
import NaviBar from "../../components/NaviBar";
import Table from "../../components/Table";
/** Apollo client */
import { useQuery, useMutation } from "@apollo/client";
/** GraphQL */
import { GET_POSTS, DELETE_POST } from "../../GraphQL/Posts/queries";

const Dashboard = () => {
  const tHead = ["No", "Judul", "Penulis", "Aksi"];

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_POSTS);

  const [deletePost] = useMutation(DELETE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, []);

  const handleNewPostButton = () => {
    navigate("/dashboard/add-new-post");
  };

  return (
    <>
      <NaviBar />
      <div className="m-3">
        <h1 className="mb-4">Dashboard</h1>
        <button onClick={handleNewPostButton} className="btn bg_primary">
          Add New Post
        </button>
        {loading === false && data ? (
          <div className="m-3">
            <Table data={data.posts} tHead={tHead} deletePost={deletePost} />
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

export default Dashboard;
