import React from "react";
import ReactDOM from "react-dom";
import Pusher from "pusher-js";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const API_URL = "http://localhost:9000/";
const GET = "GET"

const BarChart = props => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      padding={{ top: 0, bottom: 50, left: 60, right: 40 }}
      style={{ parent: { maxWidth: "50%" } }}
      domainPadding={10}
    >
      <VictoryAxis
        label="Position (mm)"
        style={{
          axisLabel: { padding: 30 }
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Count"
        style={{
          axisLabel: { padding: 40 }
        }}
      />
      <VictoryBar
        data={props.data}
        x="position"
        y="count"
        domain={{ y: [0, 5000] }}
        style={{
          data: { fill: props.fillColor }
        }}
        domainPadding={{ y: 0 }}
      />
    </VictoryChart>
  );
};

class Chart extends React.Component {
  state = {
    data: [
      { position: 1, count: 0 },
      { position: 2, count: 0 },
      { position: 3, count: 0 },
      { position: 4, count: 0 },
      { position: 5, count: 0 },
      { position: 6, count: 0 },
      { position: 7, count: 0 },
      { position: 8, count: 0 },
      { position: 9, count: 0 },
      { position: 10, count: 0 }
    ]
  };

  constructor(props) {
    super(props);

    this.appInterval = setInterval(() => {
      this.setState({
        data: [
          { position: 1, count: this.updateCount(1) },
          { position: 2, count: this.updateCount(2) },
          { position: 3, count: this.updateCount(3) },
          { position: 4, count: this.updateCount(4) },
          { position: 5, count: this.updateCount(5) },
          { position: 6, count: this.updateCount(6) },
          { position: 7, count: this.updateCount(7) },
          { position: 8, count: this.updateCount(8) },
          { position: 9, count: this.updateCount(9) },
        ]
      });
    }, 1000);
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(e) {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      var nexCount
      data.forEach(function(d) {
        if(d.position == e) {
          nexCount = d.count
          //console.log(nexCount)
        }
      })

      if (this.state.data[e-1].count == null || this.state.data[e-1].count > 5000) {
        this.state.data[e-1].count = 0;
      }

      console.log(this.state.data[e-1].count) 
         
      this.setState({ count: (this.state.data[e-1].count = nexCount) });
    });
  }

  componentDidMount() {
    this.pusher = new Pusher("7ad2d5c6d8c616c9e4f7", {
      cluster: "us3",
      encrypted: true
    });
    this.channel = this.pusher.subscribe("OptiQit");
  }

  render() {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <BarChart data={this.state.data} />
      </div>
    );
  }
}

export default Chart;
