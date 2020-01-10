import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ExperimentIcon from "./ExperimentIcon";
import { Nav, Col, Row, Image } from "react-bootstrap";

class ExperimentList extends React.Component {
  render() {
    function handleClick(e) {}
    return (
      <MDBContainer className="d-flex justify-content-around">
        <MDBRow>
          <MDBCol md="4">
            <Nav>
              <Nav.Link href="/experiment">
                <MDBView hover>
                  <img
                    src="https://cdn.arstechnica.net/wp-content/uploads/2016/10/slide-1-800x401.jpg"
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
                src="https://cdn.arstechnica.net/wp-content/uploads/2016/10/slide-1-800x401.jpg"
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
                src="https://cdn.arstechnica.net/wp-content/uploads/2016/10/slide-1-800x401.jpg"
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
