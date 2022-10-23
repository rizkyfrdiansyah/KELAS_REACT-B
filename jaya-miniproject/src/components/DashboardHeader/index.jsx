import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Universal Cookies
import Cookies from "universal-cookie";

const DashboardHeader = () => {
  let navigate = useNavigate();

  const cookies = new Cookies();

  const logout = (e) => {
    e.preventDefault();

    cookies.remove("auth", { path: "/" });

    return navigate("/admin-area/login");
  };

  return (
    <header>
      <div className="logout-icons">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <Link onClick={logout} to="/login" style={{ textDecoration: "none" }} className="text-logout">
          <span>Logout</span>
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
