import React from "react";
import {CardGroup, Card} from "react-bootstrap"

import dsrighthypothesis from "../images/dphypothesisright.gif";
import dswronghypothesis from "../images/dphypothesiswrong.gif";
import unknownhypothesis from "../images/DramaticQuestionMark.png";
import lpdsrighthypothesis from "../images/lpdsrighthypothesis.png";
import lpdswronghypothesis from "../images/lpdswronghypothesis.png";

import "./Hypothesis.css"

export const Hypothesis = () => (
  <div id="hypothesis">
    <h1 >Hypothesis</h1>
    <p>
      {" "}
      Enter hypothesiss here
    </p>
  </div>
);

export const HypothesisDoubleSlit = () => (
  <div id="hypothesis">
    <h2 >Hypothesis</h2>
    <p>
      {" "}
      What do you think might happen?
    </p>
    <CardGroup>
        <Card>
            <Card.Img class="card-img-top" variant="top" src={dsrighthypothesis} />
            <Card.Body>
            <Card.Title>Interference Pattern</Card.Title>
            <Card.Text>
                Somehow the light exiting two slits forms many rows of light.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img class="card-img-top" variant="top" src={dswronghypothesis} />
            <Card.Body>
            <Card.Title>Two Rows of Light</Card.Title>
            <Card.Text>
                The light passing through the two slits is seen projected as 2 rows of light.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img class="card-img-top" variant="top" src={unknownhypothesis} />
            <Card.Body>
            <Card.Title>Something Else</Card.Title>
            <Card.Text>
                Something else entirely.
            </Card.Text>
            </Card.Body>
        </Card>
    </CardGroup>
  </div>
);

export const HypothesissLowPhotonDoubleSlit = () => (
  <div id="hypothesiss">
    <h2 >Hypothesis</h2>
    <p>
      {" "}      
      What do you think might happen?
    </p>
    <CardGroup>
        <Card>
            <Card.Img class="card-img-top" variant="top" src={lpdsrighthypothesis} />
            <Card.Body>
            <Card.Title>Interference Pattern</Card.Title>
            <Card.Text>
                Somehow after each individual photon passes through the double slit filter, an interference pattern is still visible.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img class="card-img-top" variant="top" src={lpdswronghypothesis} />
            <Card.Body>
            <Card.Title>Only Two Areas of High Concentration</Card.Title>
            <Card.Text>
                Only two areas, directly inline with the double slit are measured.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img class="card-img-top" variant="top" src={unknownhypothesis} />
            <Card.Body>
            <Card.Title>Something Else</Card.Title>
            <Card.Text>
                Something else entirely.
            </Card.Text>
            </Card.Body>
        </Card>
    </CardGroup>
  </div>
);