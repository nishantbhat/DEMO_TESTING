import React, { Component } from 'react';
import logo from '../../images/circle.png';
import './navbar.css';
// import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap' ;

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
// import Breadcrumbs from 'react-breadcrumbs';
class Navbar extends Component {

    singout(){
        console.log("sdfsdfsdfsd")
        browserHistory.push('/')
    }
    render() {

        return (
       

                <nav className="navbar navbar-default ucw_nav" style={{zIndex:999}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand nav_a"  href="#">
                                <img src={logo} className="img-responsive" width="100%"  />
                            </a>
                            <a className="arrow  my_btn" >Tenprint</a>
                            {/* <Breadcrumbs routes={this.props.routes}/> */}
                        </div>

                        <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle my_drop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="glyphicon glyphicon-user"/>&nbsp;Admin1 <span className="caret"></span></a>
                            <ul className="dropdown-menu my_drop">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li onClick={this.singout.bind(this)}><a href="#">Sign Out</a></li>
                            </ul>
                        </li>
                        <li className="dropdown my_drop">
                            <a href="#" className="dropdown-toggle my_drop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="glyphicon glyphicon-text-background"/>&nbsp;English <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Arabic</a></li>
                               
                            </ul>
                        </li>
                    </ul>

                    </div>
                   

                </nav>


      



        );
    }
}

export default Navbar;
