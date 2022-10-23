import React from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import FormUbahWisata from "../../components/FormUbahWisata";

const UbahWisata = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <DashboardHeader />
        <main>
          <FormUbahWisata />
        </main>
      </div>
    </>
  );
};

export default UbahWisata;
