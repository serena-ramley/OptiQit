import React from "react";
import './Instructions.css'; 
import noAttenuators from "../images/noattenuators.png";
import withAttenuators from "../images/withattenuators.png";

export const Instructions = () => (
  <div id="instructions">
    <h1 >Instructions</h1>
    <p>
      {" "}
      Enter instructions here
    </p>
  </div>
);


export const InstructionsDoubleSlit = () => (
  <div id="instructions" style={{margin: "20px 0px 0px"}}>
    <h2 >Instructions</h2>
        <ul class="stepper stepper-vertical" style={{margin: "0px 0px 0px"}}>

          <li class="active">
            <a href="#!">
              <span class="circle">1</span>
              <span class="label">First step</span>
            </a>
            <div class="step-content grey lighten-3">
              <p>
                {" "}      
                Ensure OptiQit is plugged into a wall outlet.
              </p>
            </div>
          </li>

          <li class="active">
            <a href="#!">
              <span class="circle">2</span>
              <span class="label">Second step</span>
            </a>
            <div class="step-content grey lighten-3">
              <p>
                {" "}      
                Open the optical box lid and move the attenuators out of the path of light.
              </p>
              <img
                  src={noAttenuators}
                  alt="Attenuators are moved outside of the path of the laser"
                  width="600"
                  class="centre"
              />
            </div>
          </li>

          <li class="active">
            <a href="#!">
              <span class="circle">3</span>
              <span class="label">Third step</span>
            </a>
            <div class="step-content grey lighten-3">
              <p>
                {" "}      
                Close the optical box lid.
              </p>
            </div>
          </li>

          <li class="active">
            <a href="#!">
              <span class="circle">4</span>
              <span class="label">Fourth step</span>
            </a>
            <div class="step-content grey lighten-3">
              <p>
                {" "}      
                Open the viewport and view the display screen.
              </p>
            </div>
          </li>

        </ul>
  </div>
);

export const InstructionsLowPhotonDoubleSlit = () => (
  <div id="instructions" style={{margin: "20px 0px 0px"}}>
    <h2 >Instructions</h2>

        <ul class="stepper stepper-vertical" style={{margin: "0px 0px 0px"}}>

          <li class="active">
            <a href="#!">
              <span class="circle">1</span>
              <span class="label">First step</span>
            </a>
            <div class="step-content grey lighten-3">
              <p>
                {" "}      
                Ensure OptiQit is plugged into a wall outlet.
              </p>
            </div>
          </li>

          <li class="active">
            <a href="#!">
              <span class="circle">2</span>
              <span class="label">Second step</span>
            </a>
            <div class="step-content grey lighten-3">
              <p>
                {" "}      
                Open the optical box lid and move the attenuators into of the path of light.
              </p>
              <img
                src={withAttenuators}
                alt="Attenuators are moved into of the path of the laser"
                width="600"
                class="centre"
              />
            </div>
          </li>

          <li class="active">
            <a href="#!">
              <span class="circle">3</span>
              <span class="label">Third step</span>
            </a>
            <div class="step-content grey lighten-3">
              <p>
                {" "}      
                Click "Connect" followed by "Start" in the Control section below.
              </p>
            </div>
          </li>

          <li class="active">
            <a href="#!">
              <span class="circle">4</span>
              <span class="label">Fourth step</span>
            </a>
            <div class="step-content grey lighten-3">
              <p>
                {" "}      
                Observe the results graph below.
              </p>
            </div>
          </li>

        </ul>



  </div>
);


