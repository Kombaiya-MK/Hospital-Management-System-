import React, { useState } from "react";

function DocterRegister(){

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
            "dateofBirth": "",
            "specialization": "",
            "experience": 0
          });
    const[doc , setdoc] = useState(
        {
            "email": "",
            "user": {
              "email": "",
              "password": "",
              "hashKey": "",
              "phoneNumber": "",
              "name": "",
              "age": 0,
              "role": ""
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
            "status": "",
            "dateofBirth": "",
            "age": 0,
            "accountStatus": "",
            "specialization": "",
            "experience": 0
          }
    )
    const Register = (event) =>
    {
        fetch("http://localhost:5101/api/Hospital/DoctorRegister" ,{
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({...doc,"doc":{} })})
            .then(async (data)=>{
                     var myData = await data.json();
                     console.log(myData)
            });
    }
    return (
        <div className="doc-register-component">
            <div className="doc-register-container">
                <div>
                    <div className="doc-register">Register</div>
                </div>
                <div className="form-control doc-register-form-container">
                    <label>
                        Email Address
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="email"
                        value={DocReg.email}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "email": event.target.value })
                        }}
                    />

                    <label>
                        FirstName
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="FirstName"
                        value={DocReg.firstName}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "firstName": event.target.value })
                        }}
                    />
                    <label>
                        lastName
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="LastName"
                        value={DocReg.lastName}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "lastName": event.target.value })
                        }}
                    />
                    <label>
                        Date of Birth
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="date"
                        value={DocReg.dateofBirth}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "dateofBirth": event.target.value })
                        }}
                    />

                    <label>
                        Gender
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={DocReg.gender}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "gender": event.target.value })
                        }}
                    />
                    <label>
                        Phone Number
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="tel"
                        value={DocReg.phone}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "phone": event.target.value })
                        }}
                    />

                    <label>
                        Marital Status
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={DocReg.marital_Status}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "marital_Status": event.target.value })
                        }}
                    />
                    <label>
                    Street Address
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={DocReg.streetAddress}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "streetAddress": event.target.value })
                        }}
                    />

                    <label>
                        City
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={DocReg.city}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "city": event.target.value })
                        }}
                    />
                    <div className="form-control doc-register-form-container">
                    <label>
                        State
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={DocReg.state}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "state": event.target.value })
                        }}
                    />

                    <label>
                        Postal Code
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={DocReg.postalCode}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "postalCode": event.target.value })
                        }}
                    />
                    <div className="form-control doc-register-form-container">
                    <label>
                        Specialization
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={DocReg.specialization}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "specialization": event.target.value })
                        }}
                    />

                    <label>
                        Experience
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="text"
                        value={DocReg.experience}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "experience": event.target.value })
                        }}
                    />
                    <label>
                        FirstName
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="FirstName"
                        value={DocReg.firstName}
                        onChange={(event) => {
                        setDocReg({ ...DocReg, "firstName": event.target.value })
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
    );
}

export default DocterRegister;