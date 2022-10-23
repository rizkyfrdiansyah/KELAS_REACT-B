import React from "react";

import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import FormUbahAdmin from "../../components/FormUbahAdmin";

const UbahAdmin = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <main>
          <FormUbahAdmin />
        </main>
      </div>
    </>
  );
};

export default UbahAdmin;
