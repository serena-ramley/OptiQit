import React, {Component} from 'react';
import './App.css';
import BlankComponent from './BlankComponent';
import ExperimentList from './ExperimentList';
import ErrorBoundary from './ErrorBoundary';
import { experiments } from './experiments';
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
        <div className="tc">
            <h1> OptiQit </h1>
            <p> Add content</p>
            <BlankComponent />
            <ErrorBoundary>
              <ExperimentList experiments = {experiments} />
            </ErrorBoundary>
        </div>
    )
    }
  }

export default App;