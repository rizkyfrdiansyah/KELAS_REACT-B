import React from "react";
import FormUbahBerita from "../../components/FormUbahBerita";

import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const UbahBerita = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <main>
          <FormUbahBerita />
        </main>
      </div>
    </>
  );
};

export default UbahBerita;
