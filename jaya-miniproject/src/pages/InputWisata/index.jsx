import React from "react";
import FormInputWisata from "../../components/FormInputWisata";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";

const InputWisata = () => {
  return (
    <div className="main-content-form-input-wisata">
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />

        <main>
          <FormInputWisata />
        </main>
      </div>
    </div>
  );
};

export default InputWisata;
