import React, { useEffect, useState } from "react";
import LoadingSvg from "../LoadingSvg/LoadingSvg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";

// Hasura GraphQL Queries
import { GET_LISTADMIN, GET_ADMIN_BY_ID } from "../../graphql/queries";

// Hasura GraphQL Mutations
import { UPDATE_ADMIN } from "../../graphql/mutations";

// Third Party
import Swal from "sweetalert2";

const FormUbahAdmin = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    nama_admin: "",
    username: "",
    password: "",
    passwordLama: "",
    passwordBaru: "",
    konfirmasiPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
    passwordLama: "",
    passwordBaru: "",
    konfirmasiPassword: "",
  });

  const [isDataReady, setIsDataReady] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_ADMIN_BY_ID, {
    variables: { id: id },
  });

  const [updateAdmin, { loading: loadingUpdate }] = useMutation(UPDATE_ADMIN, {
    refetchQueries: [GET_LISTADMIN],
    onCompleted: (data) => {
      Swal.fire({
        title: "Sukses!",
        text: "Data Berhasil Diupdate",
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

    // Validasi Password Lama
    if (inputs.passwordLama !== inputs.password) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        passwordLama: "Password Lama Tidak Sesuai",
      }));
      return;
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        passwordLama: "",
      }));
    }

    // Validasi Konfirmasi Password
    if (inputs.passwordBaru !== inputs.konfirmasiPassword) {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        konfirmasiPassword: "Tidak Sesuai Dengan Password Baru",
      }));
      return;
    } else {
      setErrorMessage((errorMessage) => ({
        ...errorMessage,
        konfirmasiPassword: "",
      }));
    }

    updateAdmin({
      variables: {
        id: id,
        nama_admin: inputs.nama_admin,
        username: inputs.username,
        password: inputs.passwordBaru,
      },
    });

    setInputs({
      nama_admin: "",
      username: "",
      password: "",
      passwordLama: "",
      passwordBaru: "",
      konfirmasiPassword: "",
    });

    setErrorMessage({
      username: "",
      password: "",
      passwordLama: "",
      passwordBaru: "",
      konfirmasiPassword: "",
    });
  };

  const handleReset = (e) => {
    e.preventDefault();

    setErrorMessage({
      username: "",
      password: "",
      passwordLama: "",
      passwordBaru: "",
      konfirmasiPassword: "",
    });
    navigate("/kelola-admin");
  };

  useEffect(() => {
    if (!loading && data) {
      setInputs({
        nama_admin: data?.admin[0].nama_admin,
        username: data?.admin[0].username,
        password: data?.admin[0].password,
        passwordLama: "",
        passwordBaru: "",
        konfirmasiPassword: "",
      });

      setIsDataReady(true);
    }
  }, [loading, data]);

  const [passwordShown, setPasswordShown] = useState(false);

  const [passwordShown2, setPasswordShown2] = useState(false);

  const [passwordShown3, setPasswordShown3] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  const togglePassword3 = () => {
    setPasswordShown3(!passwordShown3);
  };

  return (
    <section className="ubah-admin mb-3 pb-3 mt-3 pt-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            {!isDataReady ? (
              <LoadingSvg />
            ) : (
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
                    <input type="text" name="username" className="form-control" id="input-username" required disabled value={inputs.username} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="input-password-lama" className="col-sm-2 col-form-label">
                    Password Lama
                  </label>
                  <div className="col-sm-10">
                    <input type={passwordShown ? "text" : "password"} name="passwordLama" className="form-control" id="input-password-lama" required value={inputs.passwordLama} onChange={(e) => handleInput(e.target.value, e.target.name)} />
                    {!!errorMessage.passwordLama && (
                      <div>
                        <i className="text-danger">
                          <small>{errorMessage.passwordLama}</small>
                        </i>
                      </div>
                    )}
                    <input className="form-check-input mt-2 pt-3" type="checkbox" value="" id="flexCheckDefault-lama" onClick={togglePassword} />
                    <label className="form-check-label mt-1 ms-2" htmlFor="flexCheckDefault-lama">
                      Tampilkan Password
                    </label>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="input-password-baru" className="col-sm-2 col-form-label">
                    Password Baru
                  </label>
                  <div className="col-sm-10">
                    <input
                      type={passwordShown2 ? "text" : "password"}
                      name="passwordBaru"
                      className="form-control"
                      id="input-password-baru"
                      required
                      value={inputs.passwordBaru}
                      onChange={(e) => handleInput(e.target.value, e.target.name)}
                    />
                    <input className="form-check-input mt-2 pt-3" type="checkbox" value="" id="flexCheckDefault-baru" onClick={togglePassword2} />
                    <label className="form-check-label mt-1 ms-2" htmlFor="flexCheckDefault-baru">
                      Tampilkan Password
                    </label>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="input-konfirmasi-password-baru" className="col-sm-2 col-form-label">
                    Konfirmasi Password Baru
                  </label>
                  <div className="col-sm-10">
                    <input
                      type={passwordShown3 ? "text" : "password"}
                      name="konfirmasiPassword"
                      className="form-control"
                      id="input-konfirmasi-password-baru"
                      required
                      value={inputs.konfirmasiPassword}
                      onChange={(e) => handleInput(e.target.value, e.target.name)}
                    />
                    {!!errorMessage.konfirmasiPassword && (
                      <div>
                        <i className="text-danger">
                          <small>{errorMessage.konfirmasiPassword}</small>
                        </i>
                      </div>
                    )}
                    <input className="form-check-input mt-2 pt-3" type="checkbox" value="" id="flexCheckDefault-konfirmasi" onClick={togglePassword3} />
                    <label className="form-check-label mt-1 ms-2" htmlFor="flexCheckDefault-konfirmasi">
                      Tampilkan Password
                    </label>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary btn-simpan">
                      Ubah
                    </button>
                    <button type="reset" className="btn btn-danger ms-2 btn-batal">
                      Batal
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormUbahAdmin;
