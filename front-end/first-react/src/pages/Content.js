import React from "react";

import { Navbar, MainContent } from "../components";

const Content = (props) => {
  const { isLogin, loginHandler } = props;

  return (
    <div className="container">
      <Navbar loginHandler={loginHandler} />
      <MainContent isLogin={isLogin} loginHandler={loginHandler} />
    </div>
  );
};

export default Content;
