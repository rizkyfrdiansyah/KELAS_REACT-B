import React, { useEffect, useState } from "react";
/** Components */
import Form from "../../components/Form";
/** Apollo client */
import { useMutation, useQuery, useSubscription } from "@apollo/client";
/** GraphQL */
import { GET_AUTHORS, UPDATE_USER } from "../../GraphQL/Users/queries";
/** React Router */
import { useParams, useNavigate } from "react-router-dom";
/** Sweetalert2 */
import Swal from "sweetalert2";

const EditAuthor = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [authorData, setAuthorData] = useState([]);

  const { loading, error, data } = useQuery(GET_AUTHORS, {
    onCompleted: (data) => {
      const author = data.users.filter((author) => author.id === parseInt(id));
      setAuthorData(author);
      // console.log(author);
    },
  });

  const [inputs, setInputs] = useState([
    {
      label: "Nama",
      type: "text",
      value: "",
    },
    {
      label: "Author Pic",
      type: "hidden",
      value: "",
    },
    {
      label: "Role",
      type: "hidden",
      value: "",
    },
    {
      label: "Username",
      type: "text",
      value: "",
    },
    {
      label: "Password",
      type: "password",
      value: "",
    },
    {
      label: "Id",
      type: "hidden",
      value: "",
    },
  ]);

  const [isFormPost, setIsFormPost] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  useEffect(() => {
    const newInputs = [...inputs];
    newInputs[0].value = authorData[0].nama;
    newInputs[1].value = authorData[0].profile_pic;
    newInputs[2].value = authorData[0].role;
    newInputs[3].value = authorData[0].username;
    newInputs[4].value = authorData[0].password;
    newInputs[5].value = authorData[0].id;
    setInputs(newInputs);
    console.log(inputs);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      navigate("/login");
    }
  }, []);

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_AUTHORS }],
  });

  const updateNewAuthorData = (newUpdateAuthorData) => {
    updateUser({
      variables: {
        id: newUpdateAuthorData.id,
        nama: newUpdateAuthorData.nama,
        profile_pic: newUpdateAuthorData.profile_pic,
        role: newUpdateAuthorData.role,
        username: newUpdateAuthorData.username,
        password: newUpdateAuthorData.password,
      },
    });

    navigate("/dashboard/authors");

    Swal.fire("Sukses!", "Sukses mengupdate data penulis!", "success");
  };

  return (
    <div className="m-3">
      <h1 className="m-3">Edit Data Penulis</h1>
      {loading === false && data ? (
        <div className="p-3 bg_primary rounded text-light">
          <Form updateNewAuthorData={updateNewAuthorData} isFormPost={isFormPost} isEdit={isEdit} setIsEdit={setIsEdit} inputs={inputs} setInputs={setInputs} />
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default EditAuthor;
