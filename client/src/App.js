import React, { Component } from "react";
import "./App.css";
import ExperimentList from "./components/experiments/ExperimentList";
import { Experiment } from "./components/experiments/Experiment";
import { render } from "@testing-library/react";
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
