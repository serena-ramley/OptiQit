import React from "react";
import { BrowserRouter, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import { doubleSlitExperiment } from "./experiments/Experiment";
import { lowPhotonDoubleSlitExperiment } from "./experiments/Experiment";
import { beamSplitterExperiment } from "./experiments/Experiment";
import ExperimentList from "./experiments/ExperimentList"

class Home extends React.Component {
    render() {
        //let match = useRouteMatch();
        return (
        <BrowserRouter>
        <div>
            <h1>OptiQit</h1>
            <Switch>        
                <Route exact path="/" component={ExperimentList} />
                <Route path="/doubleSlit" component={doubleSlitExperiment} />
                <Route path="/lowPhotonDoubleSlit" component={lowPhotonDoubleSlitExperiment} />
                <Route path="/beamSplitter" component={beamSplitterExperiment} />
            </Switch>
        </div>
        </BrowserRouter>
        );
    }
}

export default Home;