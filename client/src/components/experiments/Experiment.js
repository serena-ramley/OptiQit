import React from "react";
import { NavigationBar } from "../NavigationBar";
import { Instructions } from "../Instructions";
import { Control } from "../Control";
import { Results } from "../Results";

export const Experiment = () => (
  <React.Fragment>
    <NavigationBar />
    <p> Add content</p>
    <Instructions />
    <Control />
    <Results />
  </React.Fragment>
);
