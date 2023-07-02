import React from "react";
import {Routes, Route } from 'react-router-dom';
import DocterRegister from "../Doctor-Components/Doctor-Register";
import PatientRegister from "../Patient-Components/Patient-Register";
import './Register-landing.css'
import AdminNavbar from "../Navbar-Components/Admin-navbar";

function RegisterLandingPage() {

    return (
        <div>
            <AdminNavbar/>
        </div>
    )
}

export default RegisterLandingPage;