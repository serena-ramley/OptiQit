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
          axisLabel: { padding: 30 }
        }}
      />
      <VictoryBar
        data={props.data}
        x="position"
        y="count"
        domain={{ y: [0, 50] }}
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
          { position: 1, count: Math.random() * 5 + 1 },
          { position: 2, count: Math.random() * 12.5 + 1 },
          { position: 3, count: Math.random() * 5 + 1 },
          { position: 4, count: Math.random() * 25 + 1 },
          { position: 5, count: Math.random() * 5 + 1 },
          { position: 6, count: this.updateCount(6) },
          { position: 7, count: Math.random() * 5 + 1 },
          { position: 8, count: Math.random() * 25 + 1 },
          { position: 9, count: Math.random() * 5 + 1 },
        ]
      });
    }, 1000);
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount(e) {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      var curCount
      var nexCount

      this.state.data.forEach(function(d) {
        if(d.position == e) {
          curCount = d.count
          console.log(curCount)
        }
      })
      
      data.forEach(function(d) {
        if(d.position == e) {
          nexCount = d.count
          console.log(nexCount)
        }
      })

      console.log(this.state.data)
         
      this.setState({ count: (curCount += nexCount) });
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
