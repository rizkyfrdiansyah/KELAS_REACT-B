import React from "react";
import { Outlet } from "react-router-dom";
// Outlet digunakan untuk memanggil children dari route

const MainContent = () => {
  return (
    <>
      <div className="col-md-9">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainContent;
