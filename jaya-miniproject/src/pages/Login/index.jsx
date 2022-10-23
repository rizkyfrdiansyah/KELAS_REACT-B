import React, { useState, useEffect } from "react";
import ImageLogin from "../../assets/images/admin-login.gif";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
import { useNavigate } from "react-router-dom";

// Apollo Client
import { useLazyQuery } from "@apollo/client";

// Hasura GraphQL Queries
import { GET_ADMIN } from "../../graphql/queries";

// Universal Cookies
import Cookies from "universal-cookie";

const Login = () => {
  const [getAdmin, { data, loading }] = useLazyQuery(GET_ADMIN, {
    onCompleted: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      // console.log(error);
    },
  });

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const cookies = new Cookies();

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    const getAuth = cookies.get("auth");
    if (getAuth) {
      navigate("/kelola-wisata");
    }
  }, []);

  useEffect(() => {
    if (data?.admin.length === 1) {
      cookies.set(
        "auth",
        {
          id: data.admin[0].id,
          username: data.admin[0].username,
          password: data.admin[0].password,
        },
        { path: "/" }
      );
      return navigate("/kelola-wisata");
    }
  }, [data]);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();

    getAdmin({ variables: { username: username, password: password } });
  };

  if (loading) {
    return (
      <div className="loading-animation">
        <LoadingSvg />
      </div>
    );
  }

  return (
    <div className="container">
      <section className="login mt-5 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <img src={ImageLogin} alt="gambar login" className="login-image" />
            </div>
            <div className="col-md-4">
              <form className="form-login">
                <div className="form-group">
                  <h2 className="label-login-selamat-datang">Selamat Datang!</h2>
                  <label htmlFor="username" className="label-login-username">
                    Username
                  </label>
                  <input type="text" className="form-control" name="username" id="username" required autoComplete="off" autoFocus onChange={handleChangeUsername} />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="password" className="label-login-password">
                    Password
                  </label>
                  <input type={passwordShown ? "text" : "password"} className="form-control" name="password" id="password" required autoComplete="off" onChange={handleChangePassword} />
                </div>
                <input className="form-check-input login-check-box" type="checkbox" value="" id="flexCheckDefault" onClick={togglePassword} />
                <label className="form-check-label label-tampilkan-password" htmlFor="flexCheckDefault">
                  Tampilkan Password
                </label>

                {data && <h6 className="text-danger fst-italic pt-2">Username atau password salah...</h6>}

                <button type="submit" name="login" className="btn btn-primary btn-login pt-2 pb-2" onClick={login}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
