import React, { Component } from "react";
import { NavigationBarWithControl, NavigationBarWithoutControl, NavigationBarHome } from "../NavigationBar";
import { Control } from "../Control";
import { InstructionsLowPhotonDoubleSlit } from "../Instructions";
import { ResultsLowPhotonDoubleSlit } from "../Results";
import "./LowPhotonDoubleSlit.css"
import { IntroductionsLowPhotonDoubleSlit } from "../Introduction";
import { HypothesissLowPhotonDoubleSlit } from "../Hypothesis";
import { ExplanationLowPhotonDoubleSlit} from "../Explanation";

class lowPhotonDoubleSlit extends React.Component{
    render() {
        return(
            <div class="lowPhoton">
                <NavigationBarWithControl />
                <div class="lpheader">
                    <h1>Low Photon Double Slit Experiment</h1>
                </div>
                <div class="lpcontent">
                    <IntroductionsLowPhotonDoubleSlit/>
                    <HypothesissLowPhotonDoubleSlit/>
                    <InstructionsLowPhotonDoubleSlit />
                    <Control />
                    <ResultsLowPhotonDoubleSlit />
                    <ExplanationLowPhotonDoubleSlit />
                </div>
            </div>
        );
    }
}
  
export default lowPhotonDoubleSlit;