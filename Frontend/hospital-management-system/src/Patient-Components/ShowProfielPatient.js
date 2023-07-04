import React, { useState , useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import GetPatients from "../Shared-Components/GetPatients";

function ShowProfilePatient() {
    useEffect(() => {
        let ignore = false;
    
        if (!ignore) Register()
        return () => { ignore = true; }
        }, []);
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

    const getPatient  = 
        {
            "email": localStorage.getItem("Email")
        }
    var Register = (event) => {
        getPatient.email = localStorage.getItem("Email")
        fetch("http://localhost:5101/api/Hospital/GetPatient", {
          "method": "POST",
          headers: {
            "accept": "text/plain",
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({ ...getPatient, "getPatient": {} })
        })
          .then(async (data) => {
            if (data.status == 201) {
              var myData = await data.json();
              console.log(myData)
              SetPatient(myData)
              console.log(Patient)
            }
            else{
                <span style={{
                    color:"red"
                }}>Invalid User</span>
            }
          }).catch((err) => {
            console.log(err.error);
          });
      }
    return (
        <div>
            <section className="vh-100" style={{backgroundColor: "#f4f5f7"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{borderRadius: ".5rem"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white">
                                        <img src={require("../resources/images/patient.jpg")}
                                            alt="Avatar" className="img-fluid my-5" style={{width: "80px;"}} />
                                        <h5>{Patient.FirstName}</h5>
                                        <p>{Patient.LastName}</p>
                                        <i className="far fa-edit mb-5"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4"></hr>
                                                <div className="row pt-1">
                                                    <div className="col-6 mb-3">
                                                        <h6>Email</h6>
                                                        <p className="text-muted">{localStorage.getItem("Email")}</p>
                                                    </div>
                                                    <div className="col-6 mb-3">
                                                        <h6>Phone</h6>
                                                        <p className="text-muted">{Patient.Phone}</p>
                                                    </div>
                                                </div>
                                                <h6>Projects</h6>
                                                <hr className="mt-0 mb-4"></hr>
                                                    <div className="row pt-1">
                                                        <div className="col-6 mb-3">
                                                            <h6>Recent</h6>
                                                            <p className="text-muted">Lorem ipsum</p>
                                                        </div>
                                                        <div className="col-6 mb-3">
                                                            <h6>Most Viewed</h6>
                                                            <p className="text-muted">Dolor sit amet</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-start">
                                                        <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                                        <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                                        <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}
export default ShowProfilePatient;