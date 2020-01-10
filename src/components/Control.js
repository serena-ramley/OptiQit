import React from "react";
import { Button } from 'reactstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


import { Nav, Navbar } from "react-bootstrap";

export const Control = () => (

  <div>
    <h1 id="control">Control</h1>
    <p>
      {""}
      Testing paragraph
    </p>

    <div className="d-flex flex-column">
  <ButtonGroup size="lg">
    <Button>Start</Button>
    <Button>Pause/Resume</Button>
    <Button>Stop</Button>
  </ButtonGroup>
  </div>


  </div>

)

;
