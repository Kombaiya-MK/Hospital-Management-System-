import React from "react";
import { useState } from "react";
import { MDBBadge , MDBTableBody } from "mdb-react-ui-kit";

function Patient(props) {
    const [Style,setStyle] = useState({
        fontSize:"16px"
      })
    return(
        <MDBTableBody>
        <tr>
            <td>
                <div className='align-items-center'>
                    <div className=''>
                        <p className='' style={Style}>{props.p.firstName}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className='' style={Style}>{props.p.gender}</p>
            </td>
            <td>
                <p className='' style={Style}>{props.p.phone}</p>
            </td>
            <td>
                <p className='' style={Style}>{props.p.StreetAddress}</p>
            </td>
            <td>
                <p className='' style={Style}>{props.p.Marital_Status}</p>
            </td>
            <td>
                <p className='' style={Style}>{props.p.Age}</p>
            </td>
            <td>
                <MDBBadge color='success' pill>
                    {props.p.Status}
                </MDBBadge>
            </td>
        </tr>
    </MDBTableBody>
    )
}

export default Patient;