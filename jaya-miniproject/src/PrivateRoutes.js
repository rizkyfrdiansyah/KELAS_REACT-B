import React from "react";

import { Route, Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const PrivateRoutes = () => {
  const cookies = new Cookies();

  const auth = cookies.get("auth");

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
