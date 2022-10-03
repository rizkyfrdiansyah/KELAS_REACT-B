import React, { useEffect } from "react";

const LoginPage = (props) => {
  const loginHandler = () => {
    localStorage.setItem("token", "abcde");
    props.loginHandler(true);
  };

  return (
    <div className="container text-center">
      <h3>Login First</h3>
      <button onClick={loginHandler} className="btn btn-sm btn-primary">
        LOG IN
      </button>
    </div>
  );
};

export default LoginPage;
