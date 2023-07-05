import { Navigate, useNavigate } from "react-router-dom";

function Admin({role, children})
{
    if(localStorage.getItem("Role")!= null && localStorage.getItem("Role") === "Admin")
    {
        return children;
    }
    return <Navigate to="/"/>
}

export default Admin;
