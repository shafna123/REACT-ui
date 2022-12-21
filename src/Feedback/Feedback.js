import React from "react";

import NavBar from '../Components/Navbar/Navbar';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function Rating() {
  return (
    <div>
        <NavBar/>
        
    <MDBContainer>

      <MDBRow className="justify-content-center">
        <MDBCol size="8">
          <MDBCard className="mt-5">
            <MDBCardBody>
              <form action="">
                <p className="text-center">
                  <strong></strong>
                </p>

                  <p className="text-center">
                  <strong>Feedback</strong>
                </p>
                <MDBTextArea label="" rows={4} />
              </form>
            </MDBCardBody>
            <MDBCardFooter>
              <div className="text-center">
                <MDBBtn>Submit</MDBBtn>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
                
  
    </div>
  );
}