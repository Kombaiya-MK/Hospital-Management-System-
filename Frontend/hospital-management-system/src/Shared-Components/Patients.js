import React from "react";
import { useState } from "react";
import { MDBBadge , MDBTableBody } from "mdb-react-ui-kit";

function Patient(props) {
    const [Style,setStyle] = useState({
        fontSize:"16px"
      })
    return(
        <MDBTableBody></MDBTableBody>
    )
}

export default Patient;