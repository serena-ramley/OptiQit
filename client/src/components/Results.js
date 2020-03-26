import React from "react";
import Chart from "./Chart.js";
import { Nav, Navbar } from "react-bootstrap";

export const Results = () => (
  <div>
    <h1 id="results">Results</h1>
    <p>
      {" "}
      Enter Results discussion here.
    </p>
  </div>
);

export const ResultsDoubleSlit = () => (
  <div>
    <h1 id="results">Results</h1>
    <p>
      {" "}
      What do you see?
    </p>
  </div>
);

export const ResultsLowPhotonDoubleSlit = () => (
  <div>
    <h1 id="results">Results</h1>
    <p>
      {" "}
      How do you interpret the graph?
    </p>
    <Chart />
  </div>
);
