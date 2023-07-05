import { Navigate, useNavigate } from "react-router-dom";

function Patient({role, children})
{
    if(localStorage.getItem("Role")!= null && localStorage.getItem("Role") === "Patient")
    {
        return children;
    }
    return <Navigate to="/"/>
}

export default Patient;
