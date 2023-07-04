import { MDBBadge } from "mdb-react-ui-kit";
import React from "react";
import { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdb-react-ui-kit"


function ApproveDoctor() {
    const [doctors, setDoctors] = useState([
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
            "age": 0,
            "accountStatus": "",
            "specialization": "",
            "experience": 0
        }]
)
    const [doctor, setDoctor] = useState(
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
                "age": 0,
                "accountStatus": "",
                "specialization": "",
                "experience": 0
            }
    )
    useEffect(() => {
        let ignore = false;

        if (!ignore) Register()
        return () => { ignore = true; }
    }, []);
    useEffect(() => {
        let ignore = false;

        if (!ignore) Update()
        return () => { ignore = true; }
    }, []);
    const email="";

    const [Status, setStatus] = useState(
        {
            "email": "",
            "status": "Active",
            "accountStatus": ""
        }
    )
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
                setDoctors(myData)
                console.log(doctors)
            });
    }
    const Update = () => {
        console.log(Status)
        fetch("http://localhost:5101/api/Hospital/ApprovalOfDoctor", {
            "method": "PUT",
            headers: {
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({ ...Status, "Status": {} })
        })
            .then(async (data) => {
                if (data.status == 201) {
                    var myData = await data.json();
                    localStorage.setItem("Email", myData.email);
                    localStorage.setItem("Token", myData.token.toString());
                    localStorage.setItem("Role", myData.role);
                    localStorage.setItem("AccountStatus", myData.accountStatus)
                    console.log(myData)
                }
            }).catch((err) => {
                console.log(err.error);
            });
    }

    const [Style,setStyle] = useState({
        fontSize:"16px"
      })
    
      const [isActive, setIsActive] = useState(false);

      const handleClick = event => {
        if(isActive == true)
            setDoctor({...doctor,"accountStatus":"Approved"})
        else
            setDoctor({...doctor,"accountStatus":"Declined"})

        setStatus({...Status,"accountStatus":doctor.accountStatus})
        setDoctors([...doctors,doctor])
        setIsActive(current => !current);
      };

    return (
        <div>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Specialization</th>
                        <th scope='col'>Years of experience</th>
                        <th scope='col'>Age</th>
                        <th scope='col'>AccountStatus</th>
                        <th scope='col'>Update</th>
                    </tr>
                </MDBTableHead>
                {
                    doctors.filter(x => x.accountStatus != "Approved").map((val, idx) => {
                        return (
                            <MDBTableBody>
                                <tr key={idx}>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='ms-3'>
                                                <p className='' style={Style}>{val.firstName}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p style={Style}>{val.email}</p>
                                    </td>
                                    <td>
                                        <p className='' style={Style}>{val.gender}</p>
                                    </td>
                                    <td>
                                        <p className='' style={Style}>{val.phone}</p>
                                    </td>
                                    <td>
                                        <p className='' style={Style}>{val.specialization}</p>
                                    </td>
                                    <td>
                                        <p className='' style={Style}>{val.experience}</p>
                                    </td>
                                    <td>
                                        <p className='' style={Style}>{val.age}</p>
                                    </td>
                                    <td>
                                        <button className={isActive ? "btn btn-success":"btn btn-danger" } value={"Approved"} onClick={handleClick}>{val.accountStatus}</button>&nbsp;&nbsp;&nbsp;
                                    </td>
                                    <td>
                                        <button className="btn btn-dark" onClick={Update}>Confirm</button>
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

export default ApproveDoctor;