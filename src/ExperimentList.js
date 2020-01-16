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
        <MDBCol>
            <MDBView hover>
            <div style={{width: 200, height: 'auto'}}>
              <img
                src={ExperimentA}
                className="img-fluid rounded-circle hoverable"
                alt=""
                responsive
              />
              <MDBMask
                className="rounded-circle flex-center"
                overlay="red-strong"
              >
                <p className="white-text">Experiment A</p>
              </MDBMask>
              </div>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover>
            <div style={{width: 200, height: 'auto'}}>
              <img
                src={ExperimentB}
                className="img-fluid rounded-circle hoverable"
                alt=""
                responsive
              />
              <MDBMask
                className="flex-center rounded-circle"
                overlay="red-strong"
              >
                <p className="white-text">Experiment B</p>
              </MDBMask>
              </div>
            </MDBView>
          </MDBCol>
          <MDBCol>
            <MDBView hover>
            <div style={{width: 200, height: 'auto'}}>
              <img
                src={ExperimentC}
                className="img-fluid rounded-circle hoverable"
                alt=""
                responsive
              />
              <MDBMask
                className="rounded-circle flex-center"
                overlay="red-strong"
              >
                <p className="white-text">Experiment C</p>
              </MDBMask>
              </div>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ExperimentList;
