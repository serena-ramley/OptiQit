import React, { Component } from "react";
import "./App.css";
import BlankComponent from "./components/BlankComponent";
import ExperimentList from "./components/experiments/ExperimentList";
import { Experiment } from "./components/experiments/Experiment";
import { render } from "@testing-library/react";
import { NavigationBar } from "./components/NavigationBar";
import { Instructions } from "./components/Instructions";
import { Control } from "./components/Control";
import { Results } from "./components/Results";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { doubleSlitExperiment } from "./components/experiments/Experiment";
import { lowPhotonDoubleSlitExperiment } from "./components/experiments/Experiment";
import { beamSplitterExperiment } from "./components/experiments/Experiment";
import { NotFound } from "./components/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      experimentSelection: "",
      experimentStatus: ""
    };
  }
  render() {
    return (
      
      <div>
        //<div><h1>Welcome to OptiQit</h1></div>

            <Switch>
              <Route exact path="/" component={ExperimentList} />
              <Route component={NotFound} />
            </Switch>
 

      </div>
    );
  }
}

export default App;
