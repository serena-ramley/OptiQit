import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ExperimentIcon from "./ExperimentIcon";
import { Nav, Col, Row, Image } from "react-bootstrap";
import ExperimentA from "./beamsplitter.png";
import ExperimentB from "./twoslit.jpg";
import ExperimentC from "./twoslitphotons.png";

class ExperimentList extends React.Component {
  render() {
    return (
      <MDBContainer className="d-flex justify-content-around">
        <MDBRow>
          <MDBCol md="4">
            <Nav>
              <Nav.Link href="/experiment">
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
                    <p className="white-text">Experiment A</p>
                  </MDBMask>
                </MDBView>
              </Nav.Link>
            </Nav>
          </MDBCol>
          <MDBCol md="4">
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
                <p className="white-text">Experiment B</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol>
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
                <p className="white-text">Experiment C</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ExperimentList;
