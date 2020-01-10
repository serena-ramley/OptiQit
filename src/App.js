import React, { Component } from "react";
import "./App.css";
import BlankComponent from "./BlankComponent";
import ExperimentList from "./ExperimentList";
import { experiments } from "./experiments";
import { render } from "@testing-library/react";
import { NavigationBar } from "./components/NavigationBar";
import { Instructions } from "./components/Instructions";
import { Control } from "./components/Control";
import { Results } from "./components/Results";

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
      <div className="tc">
        <h1> OptiQit </h1>
        <p> Add content</p>
        <BlankComponent />
        <ExperimentList experiments={experiments} />
      </div>
    );
  }
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       experimentSelection: "",
//       experimentStatus: ""
//     };
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <NavigationBar />
//         <p> Add content</p>
//         <BlankComponent />
//         <Instructions />
//         <Control />
//         <Results />
//       </React.Fragment>
//     );
//   }
// }

export default App;
