import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

function DoctorWaitingPage() {

    return (
        <div>
            <MDBSpinner grow>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
    )

}

export default DoctorWaitingPage;