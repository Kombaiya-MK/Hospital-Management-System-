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
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [patient, setPatient] = useState(
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
      "emergencyName": "",
      "emergencyPhoneNumber": "",
      "passwordClear": ""
    });

  const register = (event) => {
    console.log(patient)
    fetch("http://localhost:5101/api/Hospital/PatientRegister", {
      method: "POST",
      headers: {
        "accept": "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patient)
    })
      .then(async (data) => {
        console.log(data)
        if (data.status == 201) {
          const myData = await data.json();
          localStorage.setItem("Email", myData.email);
          localStorage.setItem("Token", myData.token.toString());
          localStorage.setItem("Role", myData.role);
          console.log(myData);
          setModalOpen(true);
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

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
                <br />
                <br />
                <h2 className="pat-register">Register as Patient</h2>
              </div>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="email">Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    value={patient.email}
                    onChange={(event) =>
                      setPatient({ ...patient, "email": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="FirstName">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="FirstName"
                    value={patient.FirstName}
                    onChange={(event) =>
                      setPatient({ ...patient, "FirstName": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    value={patient.LastName}
                    onChange={(event) =>
                      setPatient({ ...patient, "LastName": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    className="form-control"
                    type="date"
                    id="dateOfBirth"
                    value={patient.DateofBirth}
                    onChange={(event) =>
                      setPatient({ ...patient, "DateofBirth": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender">Gender</label>
                  <input
                    className="form-control"
                    type="text"
                    id="gender"
                    value={patient.Gender}
                    onChange={(event) =>
                      setPatient({ ...patient, "Gender": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    className="form-control"
                    type="tel"
                    id="phone"
                    value={patient.Phone}
                    onChange={(event) =>
                      setPatient({ ...patient, "Phone": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <input
                    className="form-control"
                    type="text"
                    id="maritalStatus"
                    value={patient.Marital_Status}
                    onChange={(event) =>
                      setPatient({ ...patient, "Marital_Status": event.target.value })
                    }
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    className="form-control"
                    type="text"
                    id="streetAddress"
                    value={patient.StreetAddress}
                    onChange={(event) =>
                      setPatient({ ...patient, "StreetAddress": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="city">City</label>
                  <input
                    className="form-control"
                    type="text"
                    id="city"
                    value={patient.City}
                    onChange={(event) =>
                      setPatient({ ...patient, "City": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="state">State</label>
                  <input
                    className="form-control"
                    type="text"
                    id="state"
                    value={patient.State}
                    onChange={(event) =>
                      setPatient({ ...patient, "State": event.target.value })
                    }
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    className="form-control"
                    type="text"
                    id="postalCode"
                    value={patient.PostalCode}
                    onChange={(event) =>
                      setPatient({ ...patient, "PostalCode": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emergencyName">Emergency Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="emergencyName"
                    value={patient.emergencyName}
                    onChange={(event) =>
                      setPatient({ ...patient, "emergencyName": event.target.value })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emergencyPhoneNumber">Emergency Phone</label>
                  <input
                    className="form-control"
                    type="text"
                    id="emergencyPhoneNumber"
                    value={patient.emergencyPhoneNumber}
                    onChange={(event) =>
                      setPatient({
                        ...patient,
                        "emergencyPhoneNumber": event.target.value
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
                          backgroundColor: "grey",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3">
                      <button
                        type="button"
                        className="btn btn-primary login-btn"
                        style={{
                          backgroundColor: "#7EBA56",
                          color: "white",
                          fontWeight: "bold"
                        }}
                        onClick={register}
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
                <button
                  className="login-btn"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;