import React, { useState } from "react";
import "../Navbar-Components/Admin-navbar.css";
import avatarImage from "../resources/images/profile.png";
import { useNavigate } from "react-router-dom";
import GetDoctors from "../Shared-Components/GetDoctors";
import GetPatients from "../Shared-Components/GetPatients";
import PatientLandingPage from "../Patient-Components/Patient-landing-page";
import Login from "../Shared-Components/Login";
import { FaHome, FaUserMd } from "react-icons/fa";
import Sidebar from "react-sidebar";
import OffCanvas from "react-offcanvas";

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

function DoctorNavbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [component, setComponent] = useState(<GetDoctors />);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src={require("../resources/images/1.jpg")}
            className="navbar-logo"
            alt="logo"
          />
          <SearchBar />
          <ul className="navbar-menu">
            <li className="navbar-item">
              <div className="logout-link" onClick={toggleModal}>
                <img src={avatarImage} alt="avatar" className="avatar" />
                Logout
              </div>
            </li>
          </ul>
        </div>
        <Modal isOpen={modalOpen} onClose={toggleModal} />
      </nav>
      <Sidebar
        sidebar={
          <div className="adminSidebar">
            <div className="nav1">
              <ul>
                <li>
                  <button
                    onClick={() => {
                      setComponent(<PatientLandingPage />);
                      toggleSidebar();
                    }}
                  >
                    <FaHome />
                    <span>Home</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setComponent(<GetDoctors />);
                      toggleSidebar();
                    }}
                  >
                    <FaUserMd />
                    <span>Doctors List</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setComponent(<GetPatients />);
                      toggleSidebar();
                    }}
                  >
                    <FaUserMd />
                    <span>Patient List</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={toggleSidebar}
        pullRight={true}
        styles={{ sidebar: { background: "white", width: "250px" , top:"7%" } }}
      >
        <div className="adminNavbar-container">
          <div className="toggle-sidebar-container">
            <button className="toggle-sidebar-button" onClick={toggleSidebar}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="adminMainComp">{component}</div>
        </div>
      </Sidebar>
    </>
  );
}

export default DoctorNavbar;
