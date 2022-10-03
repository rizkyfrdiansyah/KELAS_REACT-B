import React, { useState } from "react";

import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div>
      <Outlet />
      {/* Outlet berfungsi utk menampilkan children routes */}
    </div>
  );
};

export default User;
