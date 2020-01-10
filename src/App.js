import React, { Component } from "react";
import "./App.css";
import BlankComponent from "./BlankComponent";
import { NavigationBar } from "./components/NavigationBar";
import { Instructions } from "./components/Instructions";
import { Control } from "./components/Control";
import { Results } from "./components/Results";

import { render } from "@testing-library/react";

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
      <React.Fragment>
        <NavigationBar />
        <p> Add content</p>
        <BlankComponent />
        <Instructions />
        <Control />
        <Results />
      </React.Fragment>
    );
  }
}

export default App;
