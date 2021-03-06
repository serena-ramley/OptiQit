import React, { Component } from "react";
import { Button } from "reactstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

var myCharacteristic;

export class Control extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    this.BLEConnect = this.BLEConnect.bind(this);
    //this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onStopButtonClick() {
    if (myCharacteristic) {
      myCharacteristic
        .stopNotifications()
        .then(_ => {
          console.log("> Notifications stopped");
          myCharacteristic.removeEventListener(
            "characteristicvaluechanged",
            this.handleNotifications
          );
        })
        .catch(error => {
          console.log("Argh! " + error);
        });
    }
  }

  onStartButtonClick() {
    if (myCharacteristic) {
      myCharacteristic
        .startNotifications()
        .then(_ => {
          console.log("> Notifications started");
          myCharacteristic.addEventListener(
            "characteristicvaluechanged",
            this.handleNotifications
          );
        })
        .catch(error => {
          console.log("Argh! " + error);
        });
    }
  }

  handleNotifications(event) {
    let value = event.target.value;
    let a = [];
    // Convert raw data bytes to hex values just for the sake of showing something.
    // In the "real" world, you'd use data.getUint8, data.getUint16 or even
    // TextDecoder to process raw data bytes.
    for (let i = 0; i < value.byteLength; i++) {
      a.push("0x" + ("00" + value.getUint8(i).toString(16)).slice(-2));
    }
    console.log("> " + a.join(" "));
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
            name: "OptiQit"
          }
        ],
        optionalServices: ["4fafc201-1fb5-459e-8fcc-c5c9c331914b"]
      })
      .then(device => {
        return device.gatt.connect();
      })
      .then(server => {
        return server.getPrimaryService("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
      })
      .then(service => {
        return service.getCharacteristic(
          "beb5483e-36e1-4688-b7f5-ea07361b26a8"
        );
      })
      .then(characteristic => {
        myCharacteristic = characteristic;
        return myCharacteristic.startNotifications().then(_ => {
          console.log("> Notifications started");
          myCharacteristic.addEventListener(
            "characteristicvaluechanged",
            this.handleNotifications
          );
        });
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
      <div style={{margin: "20px 0px 0px"}}>
        <h2 id="control">Control</h2>
        <p>Select "Connect", then "Pair" with OptiQit</p>
        <p>After connecting, press "Start" when you are ready to begin measurements</p>
        <p>You can press "Pause/Resume" or "Stop" at anytime. Otherwise, OptiQit will stop automatically once the experiment is complete</p>

        <p>{this.state.apiResponse}</p>

        <div className="d-flex flex-column">
          <ButtonGroup size="lg">
            <Button onClick={this.BLEConnect}>Connect</Button>
            <Button onClick={this.onStartButtonClick}>Start</Button>
            <Button>Pause/Resume</Button>
            <Button onClick={this.onStopButtonClick}>Stop</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
