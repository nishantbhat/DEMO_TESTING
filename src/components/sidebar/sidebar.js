import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import './sidebar.css';




class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            selectedCircle: {
                first:'selected'
            },
        };
    }


    toggleChoice(name, event) {
        let selected = this.state.selectedCircle.name;
        selected = {};
        selected[name] = this.state.selectedCircle[name] == "selected" ? "my_li" : "selected my_li";
       
        this.setState({ selectedCircle: selected });
    }
   
    render() {
        
        return (


            <div className="row sidebarback" >
                <div className="col-md-12" style={{ padding: 0 }}>
                    <ul className="my_ul">
                        <li onClick={this.toggleChoice.bind(this, "zero")} className={this.state.selectedCircle["zero"] } style={{padding:15}}    >
                            <i className="glyphicon glyphicon-home pull-left " style={{ paddingLeft: 10 }}></i> Home
                           </li>
                        <li onClick={this.toggleChoice.bind(this, "first")} className={this.state.selectedCircle["first"] } style={{padding:15}} >
                        <Link className="sideLink" to='/dashboard'>   <i className="glyphicon glyphicon-user pull-left " style={{ paddingLeft: 10 }}></i>User Management
                        </Link> </li>
                        <li onClick={this.toggleChoice.bind(this, "second")} className={this.state.selectedCircle["second"]} style={{padding:15}}>
                            <Link className="sideLink" to='/dashboard/tenprint'> <i className="glyphicon glyphicon-duplicate pull-left" style={{ paddingLeft: 10}} ></i>Tenprint
                            </Link></li>
                        <li onClick={this.toggleChoice.bind(this, "third")} className={this.state.selectedCircle["third"]} style={{padding:15}}>
                            <i className="glyphicon glyphicon-sunglasses pull-left" style={{ paddingLeft: 10 }}></i>Latent
                           </li>
                        <li onClick={this.toggleChoice.bind(this, "fourth")} className={this.state.selectedCircle["fourth"]} style={{padding:15}}>
                            <i className="glyphicon glyphicon-eye-open pull-left" style={{ paddingLeft: 10 }}></i> Visual Verify
                           </li>
                    
                        
                    </ul>
                </div>
            </div>






        );
    }
}

export default Sidebar;
