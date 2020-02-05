import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavigationBar } from "../NavigationBar";
import { Instructions } from "../Instructions";
import { Control } from "../Control";
import { Results } from "../Results";

import { InstructionsA } from "./Instructions";
import { InstructionsC } from "./Instructions";

import { ResultsA } from "./Results";
import { ResultsC } from "./Results";






export const Experiment = () => (

  <React.Fragment>
    <NavigationBar />
    <p> Hello </p>
    <Instructions />
    <Control />
    <Results />
  </React.Fragment>
);

export const ExperimentA = () => (

  <React.Fragment>
    <p> Hello </p>
    <InstructionsA />
    <ResultsA />
  </React.Fragment>
);

export const ExperimentB = () => (

  <React.Fragment>
    <p>Coming to an OpticQit near you</p>
  </React.Fragment>
);


export const ExperimentC = () => (

  <React.Fragment>
    <NavigationBar />
    <InstructionsC />
    <Control />
    <ResultsC />
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