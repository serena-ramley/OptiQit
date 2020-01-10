import React, { Component } from "react";
import "./App.css";
import BlankComponent from "./BlankComponent";
<<<<<<< HEAD
import ExperimentList from "./ExperimentList";
import { experiments } from "./experiments";
import { render } from "@testing-library/react";
=======
>>>>>>> 07cf3effba5eee2f047074cf8ff7b79aa0c3d26f
import { NavigationBar } from "./components/NavigationBar";
import { Instructions } from "./components/Instructions";
import { Control } from "./components/Control";
import { Results } from "./components/Results";

<<<<<<< HEAD
=======
import { render } from "@testing-library/react";

>>>>>>> 07cf3effba5eee2f047074cf8ff7b79aa0c3d26f
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
<<<<<<< HEAD
      <div className="tc">
        <h1> OptiQit </h1>
        <p> Add content</p>
        <BlankComponent />
        <ExperimentList experiments={experiments} />
      </div>
=======
      <React.Fragment>
        <NavigationBar />
        <p> Add content</p>
        <BlankComponent />
        <Instructions />
        <Control />
        <Results />
      </React.Fragment>
>>>>>>> 07cf3effba5eee2f047074cf8ff7b79aa0c3d26f
    );
  }
}

<<<<<<< HEAD
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

=======
>>>>>>> 07cf3effba5eee2f047074cf8ff7b79aa0c3d26f
export default App;
