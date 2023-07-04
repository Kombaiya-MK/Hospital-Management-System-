import React from "react";
import { Routes, Route } from 'react-router-dom';
import DocterRegister from "../Doctor-Components/Doctor-Register";
import PatientRegister from "../Patient-Components/Patient-Register";

import AdminNavbar from "../Navbar-Components/Admin-navbar";
import "../Navbar-Components/Admin-navbar.css";
import avatarImage from "../resources/images/profile.png";
import { useNavigate, Link } from "react-router-dom";
import GetDoctors from "../Shared-Components/GetDoctors";
import GetPatients from "../Shared-Components/GetPatients";
import Login from "../Shared-Components/Login";
import { useState } from "react";

import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit'
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
    const [component, setComponent] = useState(<GetDoctors />)
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src={require("../resources/images/1.jpg")}
                        className="navbar-logo"
                        alt="logo"
                    />
                    <SearchBar />

                </div>
                <Modal isOpen={modalOpen} onClose={toggleModal} /></nav>
                <div style={{
                    marginBottom:"5rem"
                }}
                ></div>
            <div className="container-fluid card-container col-12 mb-4 row">
            <div className="col-3"></div>
                <div class="card col-3" >
                    <img src={require('../resources/images/profile.png')} class="card-img-top" alt="..." style={
                        {
                            width:"10rem"
                        }
                    }></img>
                    <div class="card-body">
                        <h5 class="card-title">Register as Patient</h5>
                        <button onClick={() =>{
                            navigate("/patient")
                        }} class="btn btn-success">Register</button>
                    </div>
                </div>
                <div className="col-1"></div>
                <div class="card col-3" >
                    <img src={require('../resources/images/profile.png')} class="card-img-top" alt="..." style={
                        {
                            width:"10rem"
                        }
                    }></img>
                    <div class="card-body">
                        <h5 class="card-title">Register as Doctor</h5>
                        <button onClick={() =>{
                            navigate("/doctor")
                        }} class="btn btn-success">Register</button>
                    </div>
                </div></div>
        </>


    )
}

export default RegisterLandingPage;