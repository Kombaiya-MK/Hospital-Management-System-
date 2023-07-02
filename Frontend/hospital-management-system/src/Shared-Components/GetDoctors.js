import React from "react";
import { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from "mdb-react-ui-kit"
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function GetDoctors() {
  const [doctor, setdoctor] = useState(
    [
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
        "Status": "",
        "dateofBirth": "",
        "accountStatus": "",
        "specialization": "",
        "experience": 0
      }]);

  const [Status , setStatus] = useState(
    {
      "email": "",
      "status": "",
      "accountStatus": ""
    }
  )
  const age = () => {
    const birthDate = new Date(doctor.dateofBirth);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  const isApproved = (event) => {
    setStatus({...Status,"accountStatus" : event.target.value})
  }
  const Register = (event) => {
    fetch("http://localhost:5101/api/Hospital/GetAllDoctors", {
      "method": "GET",
      headers: {
        "accept": "text/plain"
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData)
        setdoctor(myData)
        setStatus({...Status,"email":myData.email})
        setStatus({...Status,"status":myData.Status})
        console.log(doctor)
      });
  }
  return (
    <div onFocus={Register}>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Specialization</th>
            <th scope='col'>Years of experience</th>
            <th scope='col'>Age</th>
            <th scope='col'>AccountStatus</th>
          </tr>
        </MDBTableHead>
        {
          doctor.map((val, idx) => {
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
                    <p className='fw-normal mb-1'>{val.phone}</p>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{val.specialization}</p>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{val.experience}</p>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{age}</p>
                  </td>
                  <td>
                  <ToggleButtonGroup type='checkbox' name='Account Status'>
                  <ToggleButton value={'Pending'}>Pending</ToggleButton>
                  <ToggleButton value={'Approved'}>Approved</ToggleButton>
                  <ToggleButton value={'Declined'}>Declined</ToggleButton>
                </ToggleButtonGroup>
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

export default GetDoctors;