import React from "react";

import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import FormInputAdmin from "../../components/FormInputAdmin";

const InputAdmin = () => {
  return (
    <div className="main-content-form-input-admin">
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />

        <main>
          <FormInputAdmin />
        </main>
      </div>
    </div>
  );
};

export default InputAdmin;
