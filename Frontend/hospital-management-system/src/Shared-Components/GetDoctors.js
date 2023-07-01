import React from "react";
import { useState } from "react";

function GetDoctors()
{
    const [doctor , setdoctor] = useState(
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

        const Register = (event) =>
        {
            fetch("http://localhost:5101/api/Hospital/GetAllDoctors" ,{
                "method":"GET",
                headers:{
                    "accept": "text/plain"
                },
                })
                .then(async (data)=>{
                        var myData = await data.json();
                        console.log(myData)
                        setdoctor(myData)
                        console.log(doctor)
                  });
          }
    return (
        <div>
            <button onClick={Register}>
               click here </button>
            {
                doctor.map((val,idx) => {
                    return(
                        <div>
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

export default GetDoctors;