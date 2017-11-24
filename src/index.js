import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import { Provider } from 'react-redux'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Dashboard from './containers/Dashboard'
import Login from './containers/Login'
import store from './store'
import Usermanagment from './components/user_management/usermanagement'

ReactDOM.render(
 <Provider store={store}>
   <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
       <IndexRoute component = {Login} />
       <Route path = "/dashboard" component = {Dashboard} />
       <Route path = "/userlist" component = {Usermanagment} />
    </Route>
   </Router>
 </Provider>
 , document.getElementById('root'));
registerServiceWorker();
