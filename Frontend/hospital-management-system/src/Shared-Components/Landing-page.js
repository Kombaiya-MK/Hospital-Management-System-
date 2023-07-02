import React from "react";
import "./CSS/Landing-page.css"

function LandingPage()
{
    return(
        <div>
        <div className="landing-page-container">
            {/* <div class="image-overlay"></div> */}
            <img src={require("../resources/images/landingpage.jpg")} alt="Notebook"></img>
            <div class="landing-page-container-content">
                <h1>Heading</h1>
                <p>Lorem ipsum..</p>
            </div>
            <div>
                <p>Patient Registration (OPD, Casualty, Appointment & ORS)
The patient registration module of the e-Hospital application is used for patient registration in the OPD and Casualty departments as well as to book, confirm and cancel appointments.

ipdIcon
Admission, Discharge & Transfer (IPD)
The IPD module commences when the patient is being registered and allotted bed in the ward. It deals with the complete treatment and services provided to the patient during his stay in the hospital.

billIcon
Billing
The Billing module handles all types of billing workflows. This module facilitates cashier and billing operators for managing billing functions related to billing receipts and refunds.

clinicIcon
Clinic (OPD & IPD)
The Clinic module allows the clinicians and doctors to record the clinical data of the patients like visits, examination, diagnosis, history, treatment, prescriptions etc., and to order investigations, procedures and medicines, to keep track of the treatment and other services provided to the patients.</p>
            </div>
    </div>
        </div>
    )
}

export default LandingPage;