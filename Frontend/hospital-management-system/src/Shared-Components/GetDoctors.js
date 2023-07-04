import React from "react";
import { useState , useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu , MDBDropdownItem } from "mdb-react-ui-kit"

function GetDoctors() {
  
  useEffect(() => {
    let ignore = false;

    if (!ignore) Register()
    return () => { ignore = true; }
    }, []);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };
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
        "age":0,
        "accountStatus": "",
        "specialization": "",
        "experience": 0
      }]);

  const [Style,setStyle] = useState({
    fontSize:"16px"
  })

  const age = () => {
    const birthDate = new Date(doctor.dateofBirth);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  }
  const Register = (event) => {
    fetch("http://localhost:5101/api/Hospital/GetAllDoctors", {
      "method": "GET",
      headers: {
        "accept": "text/plain",
        "Authorization": "Bearer " + localStorage.getItem("Token")
        
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData)
        setdoctor(myData)
        console.log(doctor)
      });
  }
  return (
    <div>
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
          doctor.filter(x => x.accountStatus == "Approved").map((val, idx) => {
            return (
              <MDBTableBody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center list-doctors'>
                      <div className='ms-3'>
                        <p className='' style={Style}>{val.firstName}</p>
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
                    <p className=''style={Style}>{val.specialization}</p>
                  </td>
                  <td>
                    <p className='' style={Style}>{val.experience}</p>
                  </td>
                  <td>
                    <p className=''style={Style}>{val.age}</p>
                  </td>
                  <td>
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