import React, { useState } from "react";
import "./Student.css";
import { Outlet } from "react-router-dom";

const Student = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Student;
