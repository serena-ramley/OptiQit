import React, {Component} from 'react';
import './App.css';
import BlankComponent from './BlankComponent';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      experimentSelection: '',
      experimentStatus: '',
    }
  }

    render() {
      return (
        <div>
            <h1> OptiQit </h1>
            <p> Add content</p>
            <BlankComponent />
        </div>
    )
    }
  }

export default App;
