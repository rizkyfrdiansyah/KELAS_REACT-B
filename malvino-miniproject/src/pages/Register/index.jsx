import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/** Sweet Alert */
import Swal from "sweetalert2";

/** Bootstrap Components */
import { Spinner } from "react-bootstrap";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Header from "../../components/Header";
import Form from "../../components/Form";

/** Queries */
import { INSERT_USER } from "../../GraphQL/Users/queries";

const Register = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      label: "Username",
      name: "username",
      type: "text",
      value: "",
      placeholder: "Masukkan Username",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: "",
      placeholder: "Masukkan Password",
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
      type: "text",
      value: "",
      placeholder: "Masukkan Nomor Handphone",
    },
  ]);

  const [insertUser, { loading }] = useMutation(INSERT_USER, {
    onCompleted: () => {
      Swal.fire("Register Berhasil!", "Akun anda sudah terdaftar.", "success");

      navigate("/login");
    },
    onError: () => {
      Swal.fire("Register Gagal!", "Username sudah dipakai.", "error");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    insertUser({
      variables: {
        username: inputs[0].value,
        password: inputs[1].value,
        email: inputs[2].value,
        noHandphone: inputs[3].value,
      },
    });

    setInputs([...inputs], (inputs[0].value = ""), (inputs[1].value = ""), (inputs[2].value = ""), (inputs[3].value = ""));
  };

  return (
    <>
      <Header />
      <div className={styles.register_container}>
        <h2>Register</h2>
        {loading ? <Spinner animation="border" variant="light" className={styles.spinner} /> : <></>}
        <Form inputs={inputs} setInputs={setInputs} buttonText="Register" handleSubmit={handleSubmit} />

        <p>
          Sudah punya akun? <Link to="/login">Login di sini!</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
