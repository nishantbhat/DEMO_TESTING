import React, { Component } from 'react';
import './App.css';

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
var child=require('child_process').exec;
// const { spawn } = require('child_process');
class App extends Component {

   
  render() {
    
    return (
     
        <div>
        {this.props.children} 
        </div>  
      
    

      
    );
  }
}

export default App;
