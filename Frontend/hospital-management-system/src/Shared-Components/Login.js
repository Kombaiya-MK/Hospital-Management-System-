import React, { useState } from "react";
import './CSS/Login.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate()
    if(localStorage.getItem('Token')){
        if(localStorage.getItem('Role') == "Doctor")
        {
           navigate("/home/doctor")
        }
        else if(localStorage.getItem('Role') == "Patient")
        {
           navigate("/home/patient")
        }
        else{
           navigate("/adminnavbar")
        }
    }

    
    const [user , setUser] = useState(
        {
            "email": "",
            "password": "",
            "token": "",
            "role": ""
          }
    );

    var Login = (event) => {
       
        fetch("http://localhost:5101/api/Hospital/Login" ,{
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({...user,"user":{} })})
            .then(async (data)=>{
                if(data.status == 201)
                {
                     var myData = await data.json();
                     localStorage.setItem("Email", myData.email);
                     localStorage.setItem("Token",myData.token.toString());
                     localStorage.setItem("Role",myData.role);
                     if(myData.role == "Doctor")
                     {
                        navigate("/home/doctor")
                     }
                     else if(myData.role == "Patient")
                     {
                        navigate("/home/patient")
                     }
                     else if(myData.role == "Admin"){
                        navigate("/home")
                     }
                     else{
                        alert("Invalid User")
                     }
                    }     
            }).catch((err) => {
                console.log(err.error);
            });
    }
    return (
        <div className="login-component">
            <div className="login-container">
                <div>
                    <div className="login">Login</div>
                </div>
                <div className="form-control login-form-container">
                    <label>
                        Email Address
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="email"
                        value={user.email}
                        onChange={(event) => {
                        setUser({ ...user, "email": event.target.value })
                        }}
                    />

                    <label>
                        Password
                    </label>
                    <input
                        className="col-12 mb-4"
                        type="password"
                        value={user.password}
                        onChange={(event) => {
                        setUser({ ...user, "password": event.target.value })
                        }}
                    />
                    <div>
                    <label className="col-5"></label>
                    <button type="reset" className="cancel-btn">Cancel</button>
                    <label className="col-1"></label>
                    <button type="submit" className="login-btn" onClick={Login}>Login</button>
                </div>
                </div>
                <div>
                    Don't have account?
                    &nbsp;&nbsp;<button className="login-btn" onClick={() =>
                    navigate("/registerlanding")}>Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default Login;