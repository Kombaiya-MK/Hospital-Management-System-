import React from "react";

function PatientLandingPage(){

    return(
        <div>
            <div className="landing-page-container">
            {/* <div class="image-overlay"></div> */}
            <img src={require("../resources/images/landingpage.jpg")} alt="image"></img>
            <div class="landing-page-container-content">
                <h1>Heading</h1>
                <p>Lorem ipsum..</p>
            </div>
        </div>
    </div>
    )

}

export default PatientLandingPage;