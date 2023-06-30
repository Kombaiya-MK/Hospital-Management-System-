import React, { useState } from "react";
import './CSS/Login.css'
import 'bootstrap/dist/css/bootstrap.css'

function Login(){

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
                    <button style = {
                        {backgroundColor:"grey",
                        color:"white",
                        border:"solid",
                        borderRadius:"5px",
                        border: "2px white solid",
                        fontWeight:"bold"
                        }
                    } type="reset" className="col-3 mb-4 btn btn-primary login-btn">Cancel</button>
                    <label className="col-1"></label>
                    <button type="submit" className="col-3 mb-4 btn btn-primary login-btn" style = {
                        {backgroundColor:"#7EBA56",
                        color:"white",
                        border:"solid",
                        borderRadius:"5px",
                        border: "2px white solid",
                        fontWeight:"bold"
                        }}  onClick={Login}>Login</button>
                </div>
                </div>
                <div>
                    Don't have account?
                    <link to=""></link>
                </div>
            </div>
        </div>
    );
}

export default Login;