import React from "react";
import { useState } from "react";

function GetPatients()
{
    <div>
        hello
    </div>
    const [Patients , SetPatients] = useState(
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
            }

    )

    const Register = () => {
        fetch("http://localhost:5101/api/Hospital/GetAllPatientes" ,{
            "method":"GET",
            headers:{
                "accept": "text/plain"
            },})
            .then(async (data)=>{
                     var myData = await data.json();
                     SetPatients(myData)
                     console.log(Patients)
            });

        return (
            <div>
                <button onClick={Register}>click here </button>
                {
                    Patients.map((val,idx) => {
                        return(
                            <div key={idx}>
                                <div>{val.firstName}</div>
                                <div>{val.dateofBirth}</div>
                                <div></div>
                            </div>
                        )
                    })
                }
        </div>
    )
}
}

export default GetPatients;