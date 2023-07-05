import React, { useState, useEffect } from "react";
import { Table, Dropdown, Button, Form } from "react-bootstrap";
import { BsFilter } from "react-icons/bs";

function GetDoctors() {
  useEffect(() => {
    let ignore = false;

    if (!ignore) Register();
    return () => {
      ignore = true;
    };
  }, []);

  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const [doctor, setDoctor] = useState([
    {
      email: "",
      user: {},
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      marital_Status: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      Status: "",
      dateofBirth: "",
      age: 0,
      accountStatus: "",
      specialization: "",
      experience: 0,
    },
  ]);

  const [Style, setStyle] = useState({
    fontSize: "16px",
  });

  const age = () => {
    const birthDate = new Date(doctor.dateofBirth);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  };

  const Register = (event) => {
    fetch("http://localhost:5101/api/Hospital/GetAllDoctors", {
      method: "GET",
      headers: {
        accept: "text/plain",
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        setDoctor(myData);
        console.log(doctor);
      });
  };

  const filteredDoctors = doctor.filter(
    (x) =>
      x.accountStatus === "Approved" &&
      (x.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        x.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        x.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        x.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <div className="me-3">
            <BsFilter size={20} />
          </div>
          <h5 className="mb-0">Filter Options</h5>
        </div>
      </div>
      <div className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Specialization</th>
            <th>Years of experience</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map((val, idx) => (
            <tr key={idx}>
              <td>
                <div className="d-flex align-items-center list-doctors">
                  <div className="ms-3">
                    <p className="" style={Style}>
                      {val.firstName}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p className="" style={Style}>
                  {val.gender}
                </p>
              </td>
              <td>
                <p className="" style={Style}>
                  {val.phone}
                </p>
              </td>
              <td>
                <p className="" style={Style}>
                  {val.specialization}
                </p>
              </td>
              <td>
                <p className="" style={Style}>
                  {val.experience}
                </p>
              </td>
              <td>
                <p className="" style={Style}>
                  {val.age}
                </p>
              </td>
              <td>
                <p className="" style={Style}>
                  {val.email}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GetDoctors;
