import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import NaviBar from "../../components/NaviBar";
/** React Router */
import { useNavigate } from "react-router-dom";
/** Apollo client */
import { useQuery, useMutation } from "@apollo/client";
/** GraphQL */
import { GET_AUTHORS, DELETE_USER } from "../../GraphQL/Users/queries";

const AuthorsPage = () => {
  const { loading, error, data, refetch } = useQuery(GET_AUTHORS);

  const [deleteAuthor] = useMutation(DELETE_USER, {
    refetchqueries: [{ query: GET_AUTHORS }],
  });

  const navigate = useNavigate();

  const tHead = ["No", "Nama", "Aksi"];

  const handleNewAuthorButton = () => {
    navigate("/dashboard/authors/add-new-author");
  };

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <NaviBar />
      <div className="m-3">
        <h1 className="mb-4">Authors Page</h1>
        <button onClick={handleNewAuthorButton} className="btn bg_primary">
          Add New Author
        </button>
        {loading === false && data ? (
          <div className="m-3">
            <Table data={data.users} tHead={tHead} deleteAuthor={deleteAuthor} />
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

export default AuthorsPage;
