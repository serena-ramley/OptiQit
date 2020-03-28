import React, { Component } from "react";
import { NavigationBarWithControl, NavigationBarWithoutControl, NavigationBarHome } from "../NavigationBar";
import { Control } from "../Control";

import { InstructionsLowPhotonDoubleSlit } from "../Instructions";

import { ResultsLowPhotonDoubleSlit } from "../Results";

class lowPhotonDoubleSlit extends React.Component{
    render() {
        return(
            <React.Fragment>
                <NavigationBarWithControl />
                <InstructionsLowPhotonDoubleSlit />
                <Control />
                <ResultsLowPhotonDoubleSlit />
            </React.Fragment>
        );
    }
  }
  
export default lowPhotonDoubleSlit;