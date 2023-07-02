import React, { useState } from "react";
import './Patient-Register.css'
import { useNavigate } from "react-router-dom";

function Modal({ isOpen, onClose }) {
  const navigate = useNavigate()
  const Redirect = () => {
    navigate("/home/patient")
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

function PatientRegister() {

  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false);
  const [Patient, SetPatient] = useState(
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
      "DateofBirth": new Date(),
      "Age": 0,
      "emergencyName": "",
      "emergencyPhoneNumber": "",
      "passwordClear": ""
    }

  )

  var Register = (event) => {
    fetch("http://localhost:5101/api/Hospital/PatientRegister", {
      "method": "POST",
      headers: {
        "accept": "text/plain",
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({ ...Patient, "Patient": {} })
    })
      .then(async (data) => {
        if (data.status == 201) {
          var myData = await data.json();
          localStorage.setItem("Email", myData.email);
          localStorage.setItem("Token",myData.token.toString());
          localStorage.setItem("Role",myData.role);
          console.log(myData)
          setModalOpen(true);
        }
      }).catch((err) => {
        console.log(err.error);
      });
  }
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="pat-register-component">
            <div className="pat-register-container">
              <div className="text-center mb-4">
                <br /><br /><h2 className="pat-register">Register as Patient</h2>
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    value={Patient.email}
                    onChange={(event) =>
                      SetPatient({ ...Patient, email: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    value={Patient.firstName}
                    onChange={(event) =>
                      SetPatient({ ...Patient, firstName: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    value={Patient.lastName}
                    onChange={(event) =>
                      SetPatient({ ...Patient, lastName: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    className="form-control"
                    type="date"
                    id="dateOfBirth"
                    value={Patient.dateofBirth}
                    onChange={(event) =>
                      SetPatient({ ...Patient, dateofBirth: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender">Gender</label>
                  <input
                    className="form-control"
                    type="text"
                    id="gender"
                    value={Patient.gender}
                    onChange={(event) =>
                      SetPatient({ ...Patient, gender: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    className="form-control"
                    type="tel"
                    id="phone"
                    value={Patient.phone}
                    onChange={(event) =>
                      SetPatient({ ...Patient, phone: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <input
                    className="form-control"
                    type="text"
                    id="maritalStatus"
                    value={Patient.marital_Status}
                    onChange={(event) =>
                      SetPatient({ ...Patient, marital_Status: event.target.value })
                    }
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    className="form-control"
                    type="text"
                    id="streetAddress"
                    value={Patient.streetAddress}
                    onChange={(event) =>
                      SetPatient({ ...Patient, streetAddress: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="city">City</label>
                  <input
                    className="form-control"
                    type="text"
                    id="city"
                    value={Patient.city}
                    onChange={(event) =>
                      SetPatient({ ...Patient, city: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="state">State</label>
                  <input
                    className="form-control"
                    type="text"
                    id="state"
                    value={Patient.state}
                    onChange={(event) =>
                      SetPatient({ ...Patient, state: event.target.value })
                    }
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    className="form-control"
                    type="text"
                    id="postalCode"
                    value={Patient.postalCode}
                    onChange={(event) =>
                      SetPatient({ ...Patient, postalCode: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emergencyName">Emergency Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="emergencyName"
                    value={Patient.emergencyName}
                    onChange={(event) =>
                      SetPatient({ ...Patient, emergencyName: event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emergencyPhoneNumber">Emergency Phone</label>
                  <input
                    className="form-control"
                    type="text"
                    id="emergencyPhoneNumber"
                    value={Patient.emergencyPhoneNumber}
                    onChange={(event) =>
                      SetPatient({
                        ...Patient,
                        emergencyPhoneNumber: event.target.value,
                      })
                    }
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
                          backgroundColor: 'grey',
                          color: 'white',
                          fontWeight: 'bold',
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
                          backgroundColor: '#7EBA56',
                          color: 'white',
                          fontWeight: 'bold',
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
                <button className="login-btn" onClick={() => {
                  navigate("/login")
                }}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default PatientRegister;