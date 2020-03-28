import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavigationBarWithControl, NavigationBarWithoutControl, NavigationBarHome } from "../NavigationBar";
import { Instructions } from "../Instructions";
import { Control } from "../Control";
import { Results } from "../Results";

import { InstructionsDoubleSlit } from "../Instructions";
import { InstructionsLowPhotonDoubleSlit } from "../Instructions";

import { ResultsDoubleSlit } from "../Results";
import { ResultsLowPhotonDoubleSlit } from "../Results";


export const Experiment = () => (
  <React.Fragment>
    <NavigationBarWithoutControl />
    <p> Hello </p>
    <Instructions />
    <Control/>
    <Results />
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
