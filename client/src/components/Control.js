import React, { Component } from "react";
import { Button } from "reactstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    this.BLEConnect = this.BLEConnect.bind(this);
    //this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  // onChangeHandler(value) {
  //   const r = Number(value.rgb.r).toString(16);
  //   const g = Number(value.rgb.g).toString(16);
  //   const b = Number(value.rgb.b).toString(16);
  //   const a = Number(value.rgb.a).toString(16);

  //   this.setBulbColor(r, g, b, a);
  // }

  // setBulbColor(red, green, blue, alpha) {
  //   console.info("color: ", red, green, blue);
  //   const data = new Uint8Array([
  //     `0x${red}`,
  //     `0x${green}`,
  //     `0x${blue}`,
  //     `0x${alpha}`
  //   ]);
  //   return this.characteristic.writeValue(data);
  // }

  BLEConnect() {
    return navigator.bluetooth
      .requestDevice({
        filters: [
          {
            services: ["4fafc201-1fb5-459e-8fcc-c5c9c331914b"]
          }
        ]
      })
      .then(device => {
        return device.gatt.connect();
      })
      .catch(error => {
        console.log(error);
      });
    // navigator.bluetooth
    //   .requestDevice({ filters: [{ services: [0xffb0] }] })
    //   .then(device => {
    //     return device.gatt.connect();
    //   })
    //   // .then(server => {
    //   //   return server.getPrimaryService(0xffb0);
    //   // })
    //   // .then(service => {
    //   //   return service.getCharacteristic(0xffb5);
    //   // })
    //   // .then(character => {
    //   //   this.characteristic = character;
    //   // })
    //   .catch(e => console.error(e))
    // );
  }

  render() {
    return (
      <div>
        <h1 id="control">Control</h1>
        <p>Testing paragraph</p>

        <p>{this.state.apiResponse}</p>

        <div className="d-flex flex-column">
          <ButtonGroup size="lg">
            <Button onClick={this.BLEConnect}>Connect</Button>
            <Button>Start</Button>
            <Button>Pause/Resume</Button>
            <Button>Stop</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
