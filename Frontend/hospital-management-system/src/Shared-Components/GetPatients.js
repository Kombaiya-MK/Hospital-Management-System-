import React from "react";
import { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBadge } from "mdb-react-ui-kit"



function GetPatients() {

  const [Style,setStyle] = useState({
    fontSize:"16px"
  })
  useEffect(() => {
    let ignore = false;

    if (!ignore) Register()
    return () => { ignore = true; }
  }, []);



  var [Patients, setPatients] = useState([
  ])
  useEffect(() => {
    console.log(Patients); 
  }, [Patients])

  const Register = () => {
    fetch("http://localhost:5101/api/Hospital/GetAllPatientes", {
      "method": "GET",
      headers: {
        "accept": "text/plain", 
        "Authorization": "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData)
        setPatients([]);
        Patients=myData;
        setPatients(Patients)
        console.log(Patients)
      })
  };

  return (
    <div>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
          <th scope='col'></th>
            <th scope='col'>Name</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Address</th>
            <th scope='col'>Marital Status</th>
            <th scope='col'>Age</th>
            <th scope='col'>Email</th>
          </tr>
        </MDBTableHead>
        {
          Patients.map((val, idx) => {
            return (
              <MDBTableBody key={idx}>
                <tr>
                  <td></td>
                  <td>
                    <div className='align-items-center'>
                      <div className=''>
                        <p className='' style={Style}>{val.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='' style={Style}>{val.gender}</p>
                  </td>
                  <td>
                    <p className='' style={Style}>{val.phone}</p>
                  </td>
                  <td>
                    <p className='' style={Style}>{val.streetAddress + " ," + val.city + " ," + val.state + " ," + val.postalCode}</p>
                  </td>
                  <td>
                    <p className='' style={Style}>{val.marital_Status}</p>
                  </td>
                  <td>
                    <p className='' style={Style}>{val.age}</p>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      {val.status}
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