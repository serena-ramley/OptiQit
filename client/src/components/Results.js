import React from "react";
import Chart from "./Chart.js";
import { Nav, Navbar } from "react-bootstrap";

export const Results = () => (
  <div>
    <h2 id="results">Results</h2>
    <p>
      {" "}
      Enter Results discussion here.
    </p>
  </div>
);

export const ResultsDoubleSlit = () => (
  <div style={{margin: "20px 0px 0px"}}>
    <h2 id="results">Results</h2>
    <p>
      {" "}
      What do you see?
    </p>
    <p>
      {" "}
      The <a href="/lowPhotonDoubleSlit">next experiment</a> deals with 
    </p>
  </div>
);

export const ResultsLowPhotonDoubleSlit = () => (
  <div style={{margin: "20px 0px 200px"}}>
    <h2 id="results">Results</h2>
    <p>
      {" "}
      How do you interpret the graph?
    </p>
    <Chart />
  </div>
);
