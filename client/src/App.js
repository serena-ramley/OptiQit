import React, { Component } from "react";
import "./App.css";
import ExperimentList from "./components/experiments/ExperimentList";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import DoubleSlit from "./components/experiments/DoubleSlit";
import LowPhotonDoubleSlit from "./components/experiments/LowPhotonDoubleSlit";
import BeamSplitter from "./components/experiments/BeamSplitter";

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
      
      <div class="page">
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ExperimentList} />
              <Route path="/doubleSlit" component={DoubleSlit} />
              <Route path="/lowPhotonDoubleSlit" component={LowPhotonDoubleSlit} />
              <Route path="/beamSplitter" component={BeamSplitter} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
