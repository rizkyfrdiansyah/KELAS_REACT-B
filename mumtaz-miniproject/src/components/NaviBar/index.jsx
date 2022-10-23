import React from "react";
/** React Bootstrap */
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/** React Router */
import { useNavigate } from "react-router-dom";
/** Apollo client */
import { useQuery } from "@apollo/client";
/** GraphQL */
import { GET_AUTHORS } from "../../GraphQL/Users/queries";
/** Sweetalert2 */
import Swal from "sweetalert2";

const NaviBar = ({ isHomePage, isUserDashboard }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const navigate = useNavigate();
  const { loading, error, data, refetch } = useQuery(GET_AUTHORS);

  const handlePostButton = () => {
    navigate("/dashboard");
  };

  const handleAuthorButton = () => {
    navigate("/dashboard/authors");
  };

  const handleLogoutButton = () => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Anda akan keluar dari akun anda!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, keluar!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        Swal.fire("Sukses logout", "Anda berhasil logout.", "success");
        navigate("/login");
        Toast.fire({
          icon: "success",
          title: "Logout berhasil",
        });
      }
    });
  };

  const handleHomeButton = () => {
    navigate("/");
  };

  const handleKategoriAgama = () => {
    navigate("/agama");
  };

  const handleKategoriBudaya = () => {
    navigate("/budaya");
  };

  const handleKategoriPolitik = () => {
    navigate("/politik");
  };

  const handleKategoriSosial = () => {
    navigate("/sosial");
  };

  const handleLoginButton = () => {
    navigate("/login");
  };

  const handleDashboardButton = () => {
    if (JSON.parse(localStorage.getItem("user")).role === "author") {
      navigate("/dashboard-user");
    } else if (JSON.parse(localStorage.getItem("user")).role === "admin") {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      {isHomePage ? (
        <Navbar className="shadow px-3" bg="light" variant="light">
          <Navbar.Brand className="logo_text" onClick={handleHomeButton}>
            Mari<span className="logo">Baca.co</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link onClick={handleKategoriSosial}>Sosial</Nav.Link>
              <Nav.Link onClick={handleKategoriPolitik}>Politik</Nav.Link>
              <Nav.Link onClick={handleKategoriAgama}>Agama</Nav.Link>
              <Nav.Link onClick={handleKategoriBudaya}>Budaya</Nav.Link>
              {localStorage.getItem("user") === null ? (
                <button onClick={handleLoginButton} className="mx-2 px-2 rounded bg_primary">
                  Login
                </button>
              ) : (
                <Nav.Link>
                  <button className="btn btn-sm bg_primary rounded-pill" onClick={handleDashboardButton}>
                    Dashboard
                  </button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar className="shadow px-3" bg="light" variant="light">
          <Navbar.Brand className="logo_text" onClick={handleHomeButton}>
            Mari<span className="logo">Baca.co</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={handlePostButton}>Post</Nav.Link>
            {isUserDashboard ? "" : <Nav.Link onClick={handleAuthorButton}>Penulis</Nav.Link>}
          </Nav>
          <Nav className="d-flex-justify-content-end align-items-center">
            {localStorage.getItem("user") !== null ? (
              <>
                <Nav.Link>
                  <div className="px-0 py-1 bg_primary rounded-pill row">
                    <div className="col">
                      <img className="rounded-circle" src={JSON.parse(localStorage.getItem("user")).profile_pic} style={{ height: "20px", width: "20px" }} alt="oke" />
                    </div>
                    <p className="col">{JSON.parse(localStorage.getItem("user")).nama}</p>
                  </div>
                </Nav.Link>
                <Nav.Link>
                  <button className="btn btn-sm btn-outline-danger rounded-pill" onClick={handleLogoutButton}>
                    Logout
                  </button>
                </Nav.Link>
              </>
            ) : (
              ""
            )}
          </Nav>
        </Navbar>
      )}
    </div>
  );
};

export default NaviBar;
