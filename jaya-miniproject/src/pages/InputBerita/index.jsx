import React from "react";
import FormInputBerita from "../../components/FormInputBerita";

import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const InputBerita = () => {
  return (
    <div className="main-content-form-input-berita">
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />

        <main>
          <FormInputBerita />
        </main>
      </div>
    </div>
  );
};

export default InputBerita;
