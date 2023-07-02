import React, { useState } from "react";
import "./patient-navbar.css";
import avatarImage from "../resources/images/profile.png";
import { useNavigate, Link } from "react-router-dom";
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
    navigate("/login");
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

function PatientNavbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [component, setComponent] = useState(<GetDoctors/>)
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };


  const showComponent = ()=>{
    setComponent(<Login/>)
  }
  

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <img src={require("../resources/images/1.jpg")}
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
    <div className="adminNavbar-container">
    <div className="adminSidebar">
      <div class="nav1">
        <ul>
          <li>
              <button onClick={() => {
                setComponent(<GetDoctors/>)
              }}>
                Doctors List
              </button>
          </li>
          <li> 
         <button onClick={() => {
                setComponent(<GetPatients/>)
              }}>
            Patient List
         </button>
          </li>
        </ul>
      </div>
      </div>
    <div className="adminMainComp" >
      {component}
    </div>
    </div>
  </>
  );
}

export default PatientNavbar;
