import React, { useState } from "react";
import './Doctor-Register.css'
import { useNavigate } from "react-router-dom";

function Modal({ isOpen, onClose }) {
    const navigate = useNavigate()
    const Redirect = () => {
            navigate("/home/doctor/wait")
            
    }
    return (
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <h2>Registration Successful!</h2>
          <p>Your account has been registered successfully.</p>
          <button className="modal-close" onClick={Redirect}>
            Close
          </button>
        </div>
      </div>
    );
  }

function DocterRegister(){

    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false);
    const [DocReg , setDocReg] = useState(
        {
            "email": "",
            "user": {
            },
            "FirstName": "",
            "LastName": "",
            "Gender": "",
            "Phone": "",
            "Marital_Status": "",
            "StreetAddress": "",
            "City": "",
            "State": "",
            "PostalCode": "",
            "Status": "Inactive",
            "DateofBirth": "",
            "Age": 0,
            "accountStatus": "Inactive",
            "specialization": "",
            "experience": 0,
            "passwordClear": ""
          });
    const Register = (event) =>
    {
        fetch("http://localhost:5101/api/Hospital/DoctorRegister" ,{
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({...DocReg,DocReg:{} })})
            .then(async (data)=>{
                  var myData = await data.json();
                  localStorage.setItem("AccountStatus" , myData.accountStatus)
                  setDocReg(myData)
                  setModalOpen(true);
                  console.log(myData)
              }).catch((err) => {
                console.log(err.error);
              });
          }
    const closeModal = () => {
        setModalOpen(false);
      };
    return (
        <div className="doc-register-component">
            <div className="doc-register-container">
                <div className="doc-register">Register As Doctor</div>
                <div className="row g-3">
                <div className="col-md-6">
                    <label>Email Address</label>
                    <input
                    className="form-control"
                    type="email"
                    value={DocReg.email}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, email: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>First Name</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.FirstName}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, FirstName: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.LastName}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, LastName: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Date of Birth</label>
                    <input
                    className="form-control"
                    type="date"
                    value={DocReg.DateofBirth}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, DateofBirth: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Gender</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.Gender}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, Gender: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Phone Number</label>
                    <input
                    className="form-control"
                    type="tel"
                    value={DocReg.Phone}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, Phone: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Marital Status</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.Marital_Status}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, Marital_Status: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Street Address</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.StreetAddress}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, StreetAddress: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>City</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.city}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, City: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>State</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.State}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, State: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Postal Code</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.PostalCode}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, PostalCode: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Specialization</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.specialization}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, specialization: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Experience</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.experience}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, experience: event.target.value });
                    }}
                    />
                </div>
                <div className="col-12">
                    <div className="row">
                    <div className="col-5"></div>
                    <div className="col-3">
                        <button
                        type="reset"
                        className="btn btn-primary login-btn"
                        style={{
                            backgroundColor: "grey",
                            color: "white",
                            border: "solid",
                            borderRadius: "5px",
                            fontWeight: "bold",
                        }}
                        >
                        Cancel
                        </button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <button
                        type="submit"
                        className="btn btn-primary login-btn"
                        style={{
                            backgroundColor: "#7EBA56",
                            color: "white",
                            border: "solid",
                            borderRadius: "5px",
                            fontWeight: "bold",
                        }}
                        onClick={Register}
                        >
                        Register
                        </button>
                        <Modal isOpen={modalOpen} onClose={closeModal} />
                    </div>
                    </div>
                </div>
                </div>
                <div className="text-center mt-3">
                  <label>already have an account</label>
                  <button className="login-btn" onClick={() =>
                {
                    navigate("/")
                }}>Login</button>
                </div>
            </div>
        </div>

    );
}

export default DocterRegister;