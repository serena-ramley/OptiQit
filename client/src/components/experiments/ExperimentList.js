import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ExperimentIcon from "./ExperimentIcon";
import { Nav, Col, Row, Image } from "react-bootstrap";
import ExperimentA from "../../images/beamsplitter.png";
import ExperimentB from "../../images/twoslit.jpg";
import ExperimentC from "../../images/twoslitphotons.png";

class ExperimentList extends React.Component {
  render() {
    return (
      
      <MDBContainer className="d-flex justify-content-around">
        <MDBRow>
          <MDBCol md="4">
            <Nav>
              <Nav.Link href=" /doubleSlit">
                <MDBView hover>
                  <img
                    src={ExperimentB}
                    className="img-fluid rounded-circle hoverable"
                    alt=""
                  />
                  <MDBMask
                    className="flex-center rounded-circle"
                    overlay="red-strong"
                  >
                    <p className="white-text">Double Slit</p>
                  </MDBMask>
                </MDBView>
              </Nav.Link>
            </Nav>
          </MDBCol>
          <MDBCol>
            <Nav>
              <Nav.Link href=" /lowPhotonDoubleSlit">
                <MDBView hover>
                  <img
                    src={ExperimentC}
                    className="img-fluid rounded-circle hoverable"
                    alt=""
                  />
                  <MDBMask
                    className="rounded-circle flex-center"
                    overlay="red-strong"
                  >
                    <p className="white-text">Double Slit with Low Number Photons</p>
                  </MDBMask>
                </MDBView>
              </Nav.Link>
            </Nav>
          </MDBCol>
          <MDBCol md="4">
            <Nav>
              <Nav.Link href="/beamSplitter">
                <MDBView hover>
                  <img
                    src={ExperimentA}
                    className="img-fluid rounded-circle hoverable"
                    alt=""
                  />
                  <MDBMask
                    className="flex-center rounded-circle"
                    overlay="red-strong"
                  >
                    <p className="white-text">Beam Splitter</p>
                  </MDBMask>
                </MDBView>
              </Nav.Link>
            </Nav>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ExperimentList;
