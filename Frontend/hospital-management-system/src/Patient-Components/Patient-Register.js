import React, { useState } from "react";

function PatientRegister(){


    const [Patient , SetPatient] = useState(
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
        fetch("http://localhost:5101/api/Hospital/PatientRegister" ,{
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({...Patient,"Patient":{} })})
            .then(async (data)=>{
                     var myData = await data.json();
                     console.log(myData)
            });
    }
    return (
        <div>
            <div className="pat-register-component">
            <div className="pat-register-container">
                <div>
                    <div className="pat-register">Register</div>
                </div>
                <div className="form-control pat-register-form-container">
                    <label>
                        Email Address
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="email"
                        value={Patient.email}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "email": event.target.value })
                        }}
                    />

                    <label>
                        FirstName
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.firstName}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "firstName": event.target.value })
                        }}
                    />
                    <label>
                        lastName
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.lastName}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "lastName": event.target.value })
                        }}
                    />
                    <label>
                        Date of Birth
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="date"
                        value={Patient.dateofBirth}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "dateofBirth": event.target.value })
                        }}
                    />

                    <label>
                        Gender
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.gender}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "gender": event.target.value })
                        }}
                    />
                    <label>
                        Phone Number
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="tel"
                        value={Patient.phone}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "phone": event.target.value })
                        }}
                    />

                    <label>
                        Marital Status
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.marital_Status}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "marital_Status": event.target.value })
                        }}
                    />
                    <label>
                    Street Address
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.streetAddress}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "streetAddress": event.target.value })
                        }}
                    />

                    <label>
                        City
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.city}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "city": event.target.value })
                        }}
                    />
                    <div className="form-control doc-register-form-container">
                    <label>
                        State
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.state}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "state": event.target.value })
                        }}
                    />

                    <label>
                        Postal Code
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.postalCode}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "postalCode": event.target.value })
                        }}
                    />
                    <div className="form-control doc-register-form-container">
                    <label>
                        Emergency Name
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.emergencyName}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "emergencyName": event.target.value })
                        }}
                    />

                    <label>
                        Emergency Phone
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={Patient.emergencyPhoneNumber}
                        onChange={(event) => {
                        SetPatient({ ...Patient, "emergencyPhoneNumber": event.target.value })
                        }}
                    />
                    <div>
                    <label className="col-5"></label>
                    <button style = {
                        {backgroundColor:"grey",
                        color:"white",
                        border:"solid",
                        borderRadius:"5px",
                        border: "2px white solid",
                        fontWeight:"bold"
                        }
                    } type="reset" className="col-3 mb-4 btn btn-primary login-btn">Cancel</button>
                    <label className="col-1"></label>
                    <button type="submit" className="col-3 mb-4 btn btn-primary login-btn" style = {
                        {backgroundColor:"#7EBA56",
                        color:"white",
                        border:"solid",
                        borderRadius:"5px",
                        border: "2px white solid",
                        fontWeight:"bold"
                        }}  onClick={Register}>Register</button>
                </div>
                </div>
                <div>
                    Don't have account?
                    <link to=""></link>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default PatientRegister;