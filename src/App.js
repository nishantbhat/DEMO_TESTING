import React, { Component } from 'react';
import logo from './images/circle.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
        <p className="App-intro">
         Version: 0.0.1
        </p>
      </div>
    );
  }
}

export default App;
