import React, { Component } from "react";
import { NavigationBarWithControl, NavigationBarWithoutControl, NavigationBarHome } from "../NavigationBar";
import { InstructionsDoubleSlit } from "../Instructions";
import { ResultsDoubleSlit } from "../Results";
import "./DoubleSlit.css"
import { IntroductionDoubleSlit } from "../Introduction";
import { HypothesisDoubleSlit } from "../Hypothesis";
import { ExplanationDoubleSlit } from "../Explanation";

class DoubleSlit extends React.Component{
  render() {
      return(
        <div class="doubleSlit">
          <NavigationBarWithoutControl />
          <div class="dsheader">
            <h1>Double Slit Experiment</h1>
          </div>
          <div class="dscontent">
            <IntroductionDoubleSlit style={{margin: "0px 0px 200px"}}/>
            <HypothesisDoubleSlit/>
            <InstructionsDoubleSlit style={{margin: "0px 0px 200px"}}/>          
            <ResultsDoubleSlit />
            <ExplanationDoubleSlit/> 
          </div>
        </div>
      );
  }
}

export default DoubleSlit;
  