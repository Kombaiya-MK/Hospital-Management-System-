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

    const [Status, setStatus] = useState(
        {
            "email": "",
            "status": "Active",
            "accountStatus": "Active"
        }
    )
    const Register = (event) => {
        fetch("http://localhost:5101/api/Hospital/GetAllDoctors", {
            "method": "GET",
            headers: {
                "accept": "text/plain",
                Authorization: "Bearer " + localStorage.getItem("Token"),

            },
        })
            .then(async (data) => {
                var myData = await data.json();
                console.log(myData)
                setDoctors(myData)
                console.log(doctors)
            });
    }
    const Update = (email,event) => {
        // console.log(event.target.getAttribute("data-val1"))
        const updatedStatus = {
            ...Status,
            email: email,
            accountStatus:event.target.value,
            status: "Active"
          };
        
        console.log(Status)
        console.log(Status.email)
        fetch("http://localhost:5101/api/Hospital/ApprovalOfDoctor", {
            "method": "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("Token"),
            },
            "body": JSON.stringify(updatedStatus)
        })
            .then(async (data) => {
                    var myData = await data.json();
                    setDoctor(myData)
                    setDoctors([...doctors,doctor])
                    console.log(myData)
            }).catch((err) => {
                console.log(err.error);
            });
    }
    // useEffect(() => {
    //     Update();
    //   }, [Status]);

    const [Style,setStyle] = useState({
        fontSize:"16px"
      })
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
                    doctors.filter(x => x.accountStatus == "Pending").map((val, idx) => {
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
                                        <button className="btn btn-success" value={"Approved"} onClick={(event) => Update(val.email,event)} data-val1 = {val.email}>Approve</button>&nbsp;&nbsp;&nbsp;
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" value={"Disapproved"} onClick={(event) => Update(val.email,event)}>Decline</button>
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