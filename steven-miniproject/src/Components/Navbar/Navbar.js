import React from "react";
import "./Navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#9dabdd",
        fontFamily: "Lato, sans-serif",
      }}
      className="navbar"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
          <strong>Prunella</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link" to="/" style={{ borderRight: "2px solid white" }}>
              Home
            </Link>
            <Link className="link" to="/categories" style={{ borderRight: "2px solid white" }}>
              Categories
            </Link>
            <Link className="link" to="/cart">
              Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
