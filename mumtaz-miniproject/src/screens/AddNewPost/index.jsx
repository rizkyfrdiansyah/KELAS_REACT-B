import React, { useState, useEffect } from "react";
/** Components */
import Form from "../../components/Form";
/** React Router */
import { useNavigate, useLocation } from "react-router-dom";
/** Apollo client */
import { useMutation, useQuery } from "@apollo/client";
/** GraphQL */
import { GET_POSTS, ADD_POST } from "../../GraphQL/Posts/queries";
import { GET_AUTHORS } from "../../GraphQL/Users/queries";
/** Sweetalert2 */
import Swal from "sweetalert2";

const AddNewPost = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { loading, error, data } = useQuery(GET_POSTS);

  const { loading: loadingAuthors, error: errorAuthors, data: dataAuthors } = useQuery(GET_AUTHORS);

  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  const [inputs, setInputs] = useState([
    {
      label: "Judul",
      type: "text",
      value: "",
    },
    {
      label: "Isi Konten",
      type: "text",
      value: "",
    },
    {
      label: "Kategori",
      type: "radio",
      value: "",
    },
    {
      label: "Penulis",
      type: "select",
      value: 0,
    },
  ]);

  const [isFormPost, setIsFormPost] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (location.pathname === "/dashboard-user/add-new-post") {
      const nama = JSON.parse(localStorage.getItem("user")).nama;
      const penulis = JSON.parse(localStorage.getItem("user")).id;
      setInputs([
        {
          label: "Judul",
          type: "text",
          value: "",
        },
        {
          label: "Isi Konten",
          type: "text",
          value: "",
        },
        {
          label: "Kategori",
          type: "radio",
          value: "",
        },
        {
          label: "Id Penulis",
          type: "hidden",
          value: penulis,
        },
        {
          label: "Penulis",
          type: "text",
          value: nama,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    setIsFormPost(true);
  }, []);

  const addNewPost = (NewPost) => {
    addPost({
      variables: {
        judul: NewPost.judul,
        isi: NewPost.isi,
        post_banner: NewPost.post_banner,
        id_penulis: NewPost.id_penulis,
        kategori: NewPost.kategori,
      },
    });
    if (location.pathname === "/dashboard-user/add-new-post") {
      navigate("/dashboard-user");
      Swal.fire("Sukses!", "Sukses menambahkan postingan baru!", "success");
    } else {
      navigate("/dashboard");
      Swal.fire("Sukses!", "Sukses menambahkan postingan baru!", "success");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="m-3">
      <h1 className="m-3">Tambah Postingan Baru</h1>
      {loading === false && data && dataAuthors ? (
        <div className="p-3 bg_primary rounded text-light">
          <Form dataAuthors={dataAuthors} isEdit={isEdit} addNewPost={addNewPost} isFormPost={isFormPost} setIsFormPost={setIsFormPost} inputs={inputs} setInputs={setInputs} />
        </div>
      ) : (
        <h1>loading.....</h1>
      )}
    </div>
  );
};

export default AddNewPost;
