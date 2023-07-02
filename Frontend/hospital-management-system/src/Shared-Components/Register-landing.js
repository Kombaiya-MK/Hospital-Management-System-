import React from "react";
import {Routes, Route } from 'react-router-dom';
import App from "../App";
import DocterRegister from "../Doctor-Components/Doctor-Register";
import Login from "./Login";

function RegisterLandingPage() {

    return (
        <div>
            <Routes>
                <Route path='/doctor' >
                    <DocterRegister />
                </Route>
                <Route path='/login' >
                    <Login/>
                </Route>
            </Routes>
        </div>
    )

}

export default RegisterLandingPage;