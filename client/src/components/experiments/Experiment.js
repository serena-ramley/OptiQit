import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavigationBar } from "../NavigationBar";
import { Instructions } from "../Instructions";
import { Control } from "../Control";
import { Results } from "../Results";

import { InstructionsA } from "../Instructions";
import { InstructionsC } from "../Instructions";

import { ResultsA } from "../Results";
import { ResultsC } from "../Results";






export const Experiment = () => (

  <React.Fragment>
    <NavigationBar />
    <p> Hello </p>
    <Instructions />
    <Control />
    <Results />
  </React.Fragment>
);

export const doubleSlitExperiment = () => (

  <React.Fragment>
    <NavigationBar />
    <InstructionsA />
    <ResultsA />
  </React.Fragment>
);

export const lowPhotonDoubleSlitExperiment = () => (

  <React.Fragment>
  <NavigationBar />
  <InstructionsC />
  <Control />
  <ResultsC />
  </React.Fragment>

);


export const beamSplitterExperiment = () => (

  <React.Fragment>
  <h1>Coming soon to an OptiQit near you</h1>
  </React.Fragment>
);



// export const Experiment = () => (
//   this.Selection(this.props.data)
// );

// render(){
//   return(
  
//   <React.Fragment>
//     <NavigationBar />
//     <p> Add content</p>
//     <Instructions />
//     <Control />
//     <Results />
//   </React.Fragment>)
// }




function Selection(string)
{
  
  return string
}
