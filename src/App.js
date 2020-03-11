import React, { Component } from "react";
import "./App.css";
import BlankComponent from "./BlankComponent";
import ExperimentList from "./ExperimentList";
import { Experiment } from "./components/Experiment";
import { render } from "@testing-library/react";
import { NavigationBar } from "./components/NavigationBar";
import { Instructions } from "./components/Instructions";
import { Control } from "./components/Control";
import { Results } from "./components/Results";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { ExperimentA } from "./components/Experiment";
import { ExperimentB } from "./components/Experiment";
import { ExperimentC } from "./components/Experiment";




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
      <h1>
          Welcome to OptiQit
       </h1>
      <BrowserRouter>
        <div className = "center-screen">
        
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

