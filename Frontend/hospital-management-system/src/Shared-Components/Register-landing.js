import React from "react";
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../Navbar-Components/Admin-navbar.css";
import avatarImage from "../resources/images/profile.png";
import GetDoctors from "../Shared-Components/GetDoctors";
import GetPatients from "../Shared-Components/GetPatients";
import Login from "../Shared-Components/Login";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      {searchQuery && (
        <button className="search-button" onClick={clearSearch}>
          <i className="fas fa-times"></i>
        </button>
      )}
      <i className="fas fa-search search-icon"></i>
    </div>
  );
}

function Modal({ isOpen, onClose }) {
  const navigate = useNavigate();

  const Logout = (event) => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Are you sure you want to logout?</h2>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button className="logout-button" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function RegisterLandingPage() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={require("../resources/images/1.jpg")}
              className="navbar-logo"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarExample01" />
          <Navbar.Collapse id="navbarExample01">
            <Nav className="me-auto">
              <SearchBar />
            </Nav>
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal isOpen={modalOpen} onClose={toggleModal} />

      <div style={{ marginBottom: "5rem" }}></div>

      <Container>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={require('../resources/images/profile.png')}
                alt="Profile Image"
                style={{ width: "10rem" }}
              />
              <Card.Body>
                <Card.Title>Register as Patient</Card.Title>
                <Button
                  variant="success"
                  onClick={() => {
                    navigate("/patient");
                  }}
                >
                  Register
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={require('../resources/images/profile.png')}
                alt="Profile Image"
                style={{ width: "10rem" }}
              />
              <Card.Body>
                <Card.Title>Register as Doctor</Card.Title>
                <Button
                  variant="success"
                  onClick={() => {
                    navigate("/doctor");
                  }}
                >
                  Register
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}

export default RegisterLandingPage;
