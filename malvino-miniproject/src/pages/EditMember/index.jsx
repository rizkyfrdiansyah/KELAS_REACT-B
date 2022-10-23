import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

/** Sweet Alert */
import Swal from "sweetalert2";

/** Bootstrap Components */
import { Spinner } from "react-bootstrap";

/** Styles */
import styles from "./style.module.css";

/** Queries */
import { GET_MEMBER_BY_ID, UPDATE_MEMBER_BY_ID } from "../../GraphQL/Members/queries";

/** Components */
import Header from "../../components/Header";
import Form from "../../components/Form";

const EditMember = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const { id, id_member } = useParams();

  const navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      label: "Nama",
      name: "nama",
      type: "text",
      value: "",
      placeholder: "Masukkan Nama",
    },
    {
      label: "NIM",
      name: "nim",
      type: "text",
      value: "",
      placeholder: "Masukkan NIM",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      value: "",
      placeholder: "Masukkan Email",
    },
    {
      label: "No Handphone",
      name: "noHandphone",
      type: "tel",
      value: "",
      placeholder: "Masukkan No Handphone",
    },
  ]);

  const { loading } = useQuery(GET_MEMBER_BY_ID, {
    variables: {
      id: id_member,
    },
    onCompleted: (data) => {
      const { name, nim, email, noHandphone } = data.members[0];

      setInputs([...inputs], (inputs[0].value = name), (inputs[1].value = nim), (inputs[2].value = email), (inputs[3].value = noHandphone));
    },
  });

  const [updateMemberById, { loading: loadingUpdate }] = useMutation(UPDATE_MEMBER_BY_ID, {
    onCompleted: () => {
      Swal.fire("Berhasil!", "Anggota tim berhasil diupdate.", "success");

      navigate(`/dashboard/${id}`);
    },
    onError: (error) => {
      console.log(error);

      Swal.fire("Ada Error!", "", "error");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    updateMemberById({
      variables: {
        id: id_member,
        name: inputs[0].value,
        nim: inputs[1].value,
        email: inputs[2].value,
        noHandphone: inputs[3].value,
      },
    });

    setInputs([...inputs], (inputs[0].value = ""), (inputs[1].value = ""), (inputs[2].value = ""), (inputs[3].value = ""));
  };

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Link to={`/dashboard/${id}`} className={styles.back}>
        &lt; Back to Team Data
      </Link>
      <div className={styles.edit_member_container}>
        <h2>Edit Anggota</h2>
        {loading ? (
          <Spinner animation="border" variant="light" className={styles.spinner} />
        ) : loadingUpdate ? (
          <>
            <Spinner animation="border" variant="light" className={styles.spinner} />
            <Form inputs={inputs} setInputs={setInputs} buttonText="Save" handleSubmit={handleSubmit} />
          </>
        ) : (
          <Form inputs={inputs} setInputs={setInputs} buttonText="Save" handleSubmit={handleSubmit} />
        )}
      </div>
    </>
  );
};

export default EditMember;
