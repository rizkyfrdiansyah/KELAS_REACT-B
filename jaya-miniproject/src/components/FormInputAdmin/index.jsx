import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";

// Hasura GraphQL Queries
import { GET_LISTADMIN } from "../../graphql/queries";

// Hasura GraphQL Mutations
import { INSERT_ADMIN } from "../../graphql/mutations";

// Third Party
import Swal from "sweetalert2";

const FormInputAdmin = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    nama_admin: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
  });

  const [list, setList] = useState([]);

  const { data, loading, error, refetch } = useQuery(GET_LISTADMIN);

  const [insertAdmin, { loading: loadingInsert }] = useMutation(INSERT_ADMIN, {
    refetchQueries: [GET_LISTADMIN],
    onCompleted: (data) => {
      Swal.fire({
        title: "Sukses!",
        text: "Data Berhasil Disimpan",
        icon: "success",
      });
      navigate("/kelola-admin");
    },
  });

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let usernameAvail = list.filter((user) => user.username === inputs.username);

    if (usernameAvail.length === 0) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        username: "",
      }));
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        username: "Username sudah digunakan",
      }));
      return;
    }

    insertAdmin({
      variables: {
        object: {
          nama_admin: inputs.nama_admin,
          username: inputs.username,
          password: inputs.password,
        },
      },
    });

    setInputs({
      nama_admin: "",
      username: "",
      password: "",
    });

    setErrorMessage({
      username: "",
    });
  };

  const handleReset = (e) => {
    e.preventDefault();

    setErrorMessage({
      username: "",
    });
    navigate("/kelola-admin");
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (!loading && data) {
      setList([...data.admin]);
    }
  }, [loading, data]);

  return (
    <section className="tambahberita mb-3 pb-3 mt-3 pt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <div className="row mb-3">
                <label htmlFor="input-nama-admin" className="col-sm-2 col-form-label">
                  Nama Admin
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="nama_admin"
                    className="form-control"
                    id="input-nama-admin"
                    pattern="[a-zA-Z'-'\s]*"
                    title="Hanya diperbolehkan huruf"
                    required
                    value={inputs.nama_admin}
                    onChange={(e) => handleInput(e.target.value, e.target.name)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="input-username" className="col-sm-2 col-form-label">
                  Username
                </label>
                <div className="col-sm-10">
                  <input type="text" name="username" className="form-control" id="input-username" required value={inputs.username} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                  {!!errorMessage.username && (
                    <div>
                      <i className="text-danger">
                        <small>{errorMessage.username}</small>
                      </i>
                    </div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="input-password" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-10">
                  <input type={passwordShown ? "text" : "password"} name="password" className="form-control" id="input-password" required value={inputs.password} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                  <input className="form-check-input mt-2 pt-3" type="checkbox" value="" id="flexCheckDefault" onClick={togglePassword} />
                  <label className="form-check-label mt-1 ms-2" htmlFor="flexCheckDefault">
                    Tampilkan Password
                  </label>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary btn-simpan">
                    Simpan
                  </button>
                  <button type="reset" className="btn btn-danger ms-2 btn-batal">
                    Batal
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormInputAdmin;
