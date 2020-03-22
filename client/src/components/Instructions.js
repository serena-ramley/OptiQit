import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import './Instructions.css'; 
import noAttenuators from "../images/noattenuators.png";
import withAttenuators from "../images/withattenuators.png";

export const Instructions = () => (
  <div>
    <h1 id="instructions">Instructions</h1>
    <p>
      {" "}
      Enter instructions here
    </p>
  </div>
);


export const InstructionsDoubleSlit = () => (
  <div>
    <h1>Double Slit Experiment</h1>
    <h2 id="instructions">Instructions</h2>
    <p><i>Introduction</i></p>
    <p>
      {" "}
      When a beam of light reaches a "beam splitter", the light can either be transmitted (go through) or be reflected (bounce back).
      If the beam of light is aligned at 45 degrees with respect to the beam splitter,
      then it will be equally likely for each particle of light to be transmitted or reflected.
    </p>
    <p><i>Instructions</i></p>
    <p>
      {" "}      
      Move the attenuators out of the path of light.
    </p>
    <img
        src={noAttenuators}
        alt="Attenuators are moved outside of the path of the laser"
        width="600"
      />
      <p>
      </p>
  </div>
);



export const InstructionsLowPhotonDoubleSlit = () => (
  <div>
    <h1>Low Photon Double Slit Experiment</h1>
    <h2 id="instructions">Instructions</h2>
    <p><i>Introduction </i></p>
    <p>
      {" "}      
      What is a photon? Light that you see from a light bulb or from the sun is believed
      to be made up of many "photons" or particles of light.
      Light behaves both as a particle and as a wave. When you place two slits in front of a beam of light (made up of many photons),
      what do you think determines which way each particle will go? What happens when the photons bump into each other?
      Here we will try the "double slit experiment" with a small number of photons - there is light, but there is so little light that your eyes can't detect it!
      However, the electronic single photon detector will absorb photons and convert light energy to electrical energy.
      OptiQit will report how many photons are detected in a short time interval at each position.
    </p>
    <p><i>Instructions</i></p>
    <p>
      {" "}      
      Move the attenuators into the path of light.
    </p>
    <img
        src={withAttenuators}
        alt="Attenuators are moved into of the path of the laser"
        width="600"
      />
      <p>
      </p>
  </div>
);


