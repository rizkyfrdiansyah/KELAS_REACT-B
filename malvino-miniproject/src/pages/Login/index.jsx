import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
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
import { GET_USER } from "../../GraphQL/Users/queries";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/dashboard");
    }
  }, []);

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
  ]);

  const [getUsers, { loading }] = useLazyQuery(GET_USER, {
    onCompleted: (data) => {
      if (data.users.length === 0) {
        Swal.fire("Login Gagal!", "Username atau password tidak valid.", "error");
      } else {
        localStorage.setItem("token", JSON.stringify(data.users[0]));

        Swal.fire("Login Berhasil!", "Ayo Daftarkan Tim Terbaikmu.", "success");

        navigate("/dashboard");
      }
    },
    onError: (error) => {
      console.log(error);

      Swal.fire("Ada Error!", "", "error");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    getUsers({
      variables: {
        username: inputs[0].value,
        password: inputs[1].value,
      },
    });

    setInputs([...inputs], (inputs[0].value = ""), (inputs[1].value = ""));
  };

  return (
    <>
      <Header />
      <div className={styles.login_container}>
        <h2>Login</h2>
        {loading ? <Spinner animation="border" variant="light" className={styles.spinner} /> : <></>}
        <Form inputs={inputs} setInputs={setInputs} buttonText="Login" handleSubmit={handleSubmit} />

        <p>
          Belum punya akun? <Link to="/register">Register di sini!</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
