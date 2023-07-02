import React from "react";
import { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBadge } from "mdb-react-ui-kit"

function GetPatients() {
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
        <button onClick={Register}>Get patients</button>
        <MDBTable align='middle'>
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
                <MDBTableBody>
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{val.firstName}</p>
                          <p className='text-muted mb-0'>{val.lastName}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>{val.gender}</p>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>{val.phone}{val.StreetAddress}</p>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>{val.StreetAddress}</p>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>{val.Marital_Status}</p>
                    </td>
                    <td>
                      <p className='fw-normal mb-1'>{val.Age}</p>
                    </td>
                    <td>
                      <MDBBadge color='success' pill>
                        {val.Status}
                      </MDBBadge>
                    </td>
                  </tr>
                </MDBTableBody>
              );
            })
          }
        </MDBTable>
      </div>
    )
}

export default GetPatients;