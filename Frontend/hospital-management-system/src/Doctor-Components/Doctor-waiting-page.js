import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Spinner } from 'react-bootstrap';
import { AiFillCloseCircle, AiOutlineClockCircle } from 'react-icons/ai';
import './Doctor-waiting-page.css'
import cartoonImage from '../resources/images/3962578.jpg';
import { useNavigate } from "react-router-dom";

function DoctorWaitingPage() {
  const navigate = useNavigate()
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status" variant="primary" className="mb-3 custom-spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <img src={cartoonImage} alt="Cartoon Art" className="mb-3" width={120} height={120} />
      <p className="text-center">Your profile is not approved yet...</p>
      <button onClick={
        () => {
          navigate("/")
        }
      }><AiFillCloseCircle /></button>
    </div>
  );
}

export default DoctorWaitingPage;
