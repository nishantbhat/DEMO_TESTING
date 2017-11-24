import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import TenprintQueue from '../../components/tenprint_queue'
import Usermanagment from '../../components/user_management/usermanagement'


class RoutesContainer extends Component { 
  
  render() {
    
    return (
        <Router history = {browserHistory}>
            <Route path = "/dashboard/tenprint" component = {TenprintQueue} />
            <Route path = "/dashboard" component = {Usermanagment} />
        </Router>
    );
  }
}
export default RoutesContainer;

