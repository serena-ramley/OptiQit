import React from "react";
import "./ExperimentList.css";

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Nav, Col, Row, Image } from "react-bootstrap";
import beamSplitterImage from "../../images/beamsplitter.png";
import doubleSlitImage from "../../images/twoslit.jpg";
import lowPhotonDoubleSlitImage from "../../images/twoslitphotons.png";

class ExperimentList extends React.Component {
  render() {
    return (
      <div className="text-center mt-4 mb-4">
        <Row>i</Row>
        <Row>i</Row>
        <Row><Col><h1 class="text-center" style={{color:"white"}}>Welcome to OptiQit</h1></Col></Row>
        <Row>i</Row>
        <Row>i</Row>
        <Row>i</Row>
        <Row><Col><h1 class="text-center" style={{color:"white"}}>Pick an Experiment!</h1></Col></Row>
        <Row>i</Row>
        <Row>i</Row>
        <Row>i</Row>
        <Row>i</Row>
        <Row>
          <Col md="4">
            <Nav
              className="justify-content-center">
              <Nav.Link href="/doubleSlit">
                <MDBView hover>
                  <img
                    src={doubleSlitImage}
                    className="img-fluid hoverable"
                    alt=""
                  />
                  <MDBMask
                    className="flex-center"
                    overlay="blue-light"
                  >
                    <p className="white-text">Double Slit</p>
                  </MDBMask>
                </MDBView>
              </Nav.Link>
            </Nav>
          </Col>
          <Col md="4">
            <Nav className="justify-content-center">
              <Nav.Link href=" /lowPhotonDoubleSlit">
                <MDBView hover>
                  <img
                    src={lowPhotonDoubleSlitImage}
                    className="hoverable mx-auto d-block"
                    alt=""
                  />
                  <MDBMask
                    className="flex-center"
                    overlay="green-light"
                  >
                    <p className="white-text">Double Slit with Low Number Photons</p>
                  </MDBMask>
                </MDBView>
              </Nav.Link>
            </Nav>
          </Col>
          <Col md="4">
            <Nav className="justify-content-center">
              <Nav.Link href="/beamSplitter">
                <MDBView hover>
                  <img
                    src={beamSplitterImage}
                    className="img-fluid hoverable"
                    alt=""
                  />
                  <MDBMask
                    className="flex-center"
                    overlay="red-light"
                  >
                    <p className="white-text">Beam Splitter</p>
                  </MDBMask>
                </MDBView>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ExperimentList;
