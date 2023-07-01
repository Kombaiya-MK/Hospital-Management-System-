import React from "react";
import './Admin-navbar.css'

function AdminNavbar(){
    return (
        <nav className="navbar">
          <div className="navbar-container">
            <img src=".../resources/images/1" className="navbar-logo" alt="logo"></img>
            <ul className="navbar-menu">
              <li className="navbar-item">
                <div className="navbar-link" >Home</div>
              </li>
              <li className="navbar-item">
                <a href="/services" className="navbar-link">Services</a>
              </li>
              <li className="navbar-item">
                <a href="/doctors" className="navbar-link">Doctors</a>
              </li>
              <li className="navbar-item">
                <a href="/contact" className="navbar-link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      );

}

export default AdminNavbar;