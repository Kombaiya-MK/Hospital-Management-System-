import React, { useState } from "react";
import './CSS/Login.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";


function Login(){

    const navigate = useNavigate()
    const [user , setUser] = useState(
        {
            "email": "",
            "password": "",
            "token": "",
            "role": ""
          }
    );

    var Login = (event) => {
        console.log(user)
        fetch("http://localhost:5101/api/Hospital/Login" ,{
            "method":"POST",
            headers:{
                "accept": "text/plain",
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({...user,"user":{} })})
            .then(async (data)=>{
                     var myData = await data.json();
                     console.log(myData)
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