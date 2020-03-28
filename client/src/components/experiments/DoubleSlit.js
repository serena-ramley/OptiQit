import React, { Component } from "react";
import { NavigationBarWithControl, NavigationBarWithoutControl, NavigationBarHome } from "../NavigationBar";


import { InstructionsDoubleSlit } from "../Instructions";

import { ResultsDoubleSlit } from "../Results";

import "./DoubleSlit.css"

class DoubleSlit extends React.Component{
  render() {
      return(
        <div class="doubleSlit">
          <NavigationBarWithoutControl />
          <div class="header">
            <h1>Double Slit Experiment</h1>
          </div>
          <div class="content">
            <InstructionsDoubleSlit />          
            <ResultsDoubleSlit />
          </div>
        </div>
      );
  }
}

export default DoubleSlit;
  