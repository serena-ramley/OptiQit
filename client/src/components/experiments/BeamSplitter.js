import React, { Component } from "react";
import { NavigationBarWithControl, NavigationBarWithoutControl, NavigationBarHome } from "../NavigationBar";
import "./BeamSplitter.css"

class BeamSplitter extends React.Component{
    render() {
        return(
            <React.Fragment>
                <NavigationBarHome />
                <div class="beamsplitter">
                    <div class="bheader">
                        <h1 class="text-center" style={{color:"white"}}>Coming soon to an OptiQit near you</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BeamSplitter;
  