import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => (
  <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
    <Navbar.Toggle aria-controls="basic-navbar" />

    <Navbar.Collapse
      id="basic-navbar-nav"
      className="d-flex justify-content-around"
    >
      <Nav.Item>
        <Nav.Link href="#instructions">Instructions</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#control">Control</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#results">Results</Nav.Link>
      </Nav.Item>
    </Navbar.Collapse>
  </Navbar>
);
