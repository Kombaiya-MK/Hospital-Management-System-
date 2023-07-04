import React from "react";
import { useState , useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBadge } from "mdb-react-ui-kit"
import ShowProfilePatient from "../Patient-Components/ShowProfielPatient";

function GetPatients() {

  useEffect(() => {
    let ignore = false;

    if (!ignore) Register()
    return () => { ignore = true; }
    }, []);

  

  const [Patients, SetPatients] = useState([
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
  ])

  const Register = () => {
    fetch("http://localhost:5101/api/Hospital/GetAllPatientes", {
      "method": "GET",
      headers: {
        "accept": "text/plain"
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData)
        SetPatients(myData)
        console.log(Patients)
      })};

    return (
      <div >
        {/* <button onClick={Register}>Get patients</button> */}
        <MDBTable onChange={Register} align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Address</th>
              <th scope='col'>Marital Status</th>
              <th scope='col'>Age</th>
              <th scope='col'>AccountStatus</th>
            </tr>
          </MDBTableHead>
          {
            Patients.map((val, idx) => {
              return (
                <Patients p = {val} key={idx}/>
              );
            })
          }
        </MDBTable>
      </div>

    )
}

export default GetPatients;