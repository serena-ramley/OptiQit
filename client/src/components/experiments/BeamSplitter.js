import React, { Component } from "react";
import { NavigationBarWithControl, NavigationBarWithoutControl, NavigationBarHome } from "../NavigationBar";
import "./BeamSplitter.css"

class BeamSplitter extends React.Component{
    render() {
        return(
            <React.Fragment>
                <NavigationBarHome />
                <div class="text-center">
                <h1>Coming soon to an OptiQit near you</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default BeamSplitter;
  