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

import { ExperimentA } from "./components/experiments/Experiment";
import { ExperimentB } from "./components/experiments/Experiment";
import { ExperimentC } from "./components/experiments/Experiment";

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
        <h1>Welcome to OptiQit</h1>
        <BrowserRouter>
          <div className="center-screen">
            <Switch>
              <Route exact path="/" component={ExperimentList} />
              <Route path="/doubleSlit" component={ExperimentA} />
              <Route path="/lowPhotonDoubleSlit" component={ExperimentB} />
              <Route path="/beamSplitter" component={ExperimentC} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
