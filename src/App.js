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
              <Route path="/experiment" component={Experiment} />
            </Switch>
          </div>
        </BrowserRouter>
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
