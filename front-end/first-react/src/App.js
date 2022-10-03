import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, Content } from "./pages";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = (result) => {
    setIsLogin(result);
  };

  return (
    <BrowserRouter>
      <div className="container-fluid">
        {/* {isLogin ? ( */}
        <Content isLogin={isLogin} loginHandler={loginHandler} />
        {/* ) : ( */}
        {/* <LoginPage loginHandler={loginHandler}></LoginPage> */}
        {/* )} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
