import React, { useState } from "react";
import "./Admin-navbar.css";
import avatarImage from "../resources/images/profile.png";
import { useNavigate } from "react-router-dom";
import GetDoctors from "../Shared-Components/GetDoctors";
import GetPatients from "../Shared-Components/GetPatients";
import Login from "../Shared-Components/Login";
import PatientLandingPage from "../Patient-Components/Patient-landing-page";
import ApproveDoctor from "../Admin-Components/Approve-doctor";
import { AiFillHome, AiFillMedicineBox, AiFillPicture, AiFillTags, AiFillUserMd, AiOutlineMenu } from "react-icons/ai";
import Sidebar from "react-sidebar";
import { FaBars } from "react-icons/fa";

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
          <i className="fa fa-times"></i>
        </button>
      )}
      <i className="fa fa-search search-icon"></i>
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

function AdminNavbar() {
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
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            <AiOutlineMenu></AiOutlineMenu>
          </div>
        </div>
        <Modal isOpen={modalOpen} onClose={toggleModal} />
      </nav>
      <Sidebar
        sidebar={
          <div className="adminSidebar">
            <ul>
              <li>
                <button
                  onClick={() => {
                    setComponent(<PatientLandingPage />);
                    setSidebarOpen(false);
                  }}
                >
                  <AiFillHome />Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setComponent(<GetDoctors />);
                    setSidebarOpen(false);
                  }}
                >
                  <AiFillMedicineBox />Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setComponent(<GetPatients />);
                    setSidebarOpen(false);
                  }}
                >
                  <AiFillPicture />Patients
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setComponent(<ApproveDoctor />);
                    setSidebarOpen(false);
                  }}
                >
                  <AiFillTags/>Approval
                  <i className="btn-check"></i>
                </button>
              </li>
            </ul>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={toggleSidebar}
        styles={{ sidebar: { background: "#f8f8f8", width: 200, top: "7%" } }}
      >
        <div className="adminNavbar-container">
          <div className="adminMainComp">{component}</div>
        </div>
      </Sidebar>
    </>
  );
}

export default AdminNavbar;
