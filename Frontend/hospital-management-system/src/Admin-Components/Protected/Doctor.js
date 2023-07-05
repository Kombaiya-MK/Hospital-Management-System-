import { Navigate, useNavigate } from "react-router-dom";

function Doctor({role, children})
{
    if(localStorage.getItem("Role")!= null && localStorage.getItem("Role") === "Doctor")
    {
        return children;
    }
    return <Navigate to="/"/>
}

export default Doctor;
