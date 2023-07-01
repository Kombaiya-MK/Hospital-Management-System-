import React, { useState } from "react";
import './Doctor-Register.css'
import { useNavigate } from "react-router-dom";

function DocterRegister(){

    const navigate = useNavigate()
    const [DocReg , setDocReg] = useState(
        {
            "email": "",
            "user": {
            },
            "firstName": "",
            "lastName": "",
            "gender": "",
            "phone": "",
            "marital_Status": "",
            "streetAddress": "",
            "city": "",
            "state": "",
            "postalCode": "",
            "Status": "Inactive",
            "dateofBirth": new Date(),
            "accountStatus": "Inactive",
            "specialization": "",
            "experience": 0
          });
    const Register = (event) =>
    {
        fetch("http://localhost:5101/api/Hospital/DoctorRegister" ,{
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({...DocReg,"DocReg":{} })})
            .then(async (data)=>{
                     var myData = await data.json();
                     console.log(myData)
            });
    }
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
                    value={DocReg.firstName}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, firstName: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Last Name</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.lastName}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, lastName: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Date of Birth</label>
                    <input
                    className="form-control"
                    type="date"
                    value={DocReg.dateOfBirth}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, dateOfBirth: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Gender</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.gender}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, gender: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Phone Number</label>
                    <input
                    className="form-control"
                    type="tel"
                    value={DocReg.phone}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, phone: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Marital Status</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.marital_Status}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, marital_Status: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Street Address</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.streetAddress}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, streetAddress: event.target.value });
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
                        setDocReg({ ...DocReg, city: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>State</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.state}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, state: event.target.value });
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label>Postal Code</label>
                    <input
                    className="form-control"
                    type="text"
                    value={DocReg.postalCode}
                    onChange={(event) => {
                        setDocReg({ ...DocReg, postalCode: event.target.value });
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
                    </div>
                    </div>
                </div>
                </div>
                <div className="text-center mt-3">
                  <label>already have an account</label>
                  <button className="login-btn" onClick={() =>
                {
                    navigate("/login")
                }}>Login</button>
                </div>
            </div>
        </div>

    );
}

export default DocterRegister;