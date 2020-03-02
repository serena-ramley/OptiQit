import React, { Component } from "react";
import "./App.css";
import ExperimentList from "./components/experiments/ExperimentList";
import { Experiment } from "./components/experiments/Experiment";
import { render } from "@testing-library/react";
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
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ExperimentList} />
            <Route path="/experimentA" component = {ExperimentA}/>
            <Route path="/experimentB" component = {ExperimentB}/>
            <Route path="/experimentC" component = {ExperimentC} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
