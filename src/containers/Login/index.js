import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../../images/circle.png';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import const1 from '../../constant'

import checkLogin from '../../thunks/login'
class Login extends Component {
    manas = () => {
        var auth={
            email:this.refs.usr.value,
            password:this.refs.pwd.value
        }
       
        this.props.initialize(auth)
    }
    // login(){
    //     console.log(this.refs.usr.value)
    //  console.log(const1)
    //     var auth={
    //         email:this.refs.usr.value,
    //         password:this.refs.pwd.value
    //     }
    //     let url=const1.URL+"login"
        
       
    //     console.log(url)   
        
           
    //     browserHistory.push('/dashboard');

    // }
    render() {
        
        return (

<div className="row" >
         <div className="col-xs-12 " style={{display:"flex",justifyContent:"center"}}  >
            <img  style={{alignItems:"center"}} src={logo} className="img-responsive"  />
        </div> 
       
        <div className=" col-xs-12">
            <div className=" col-xs-4 col-xs-offset-4  box" >
             
             
                <div className="form-group">
                    <label >Username</label>
                    <input type="text" placeholder="Username" className="form-control" ref="usr" required="required"/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"  placeholder="Password" ref="pwd" required="required"/>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <a href="#"> <p >Change Password</p></a>
                    </div>
                    <div className="col-xs-12" style={{display:"flex",justifyContent:"flex-end"}}>
                        <button type="button" onClick={this.manas} className="btn btn-success"  name="login" id="login">Login &nbsp;<i className="glyphicon glyphicon-log-in"></i> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
      
);
}
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    
    initialize: (auth) => {
        dispatch(checkLogin(auth))
    }
})

const mapStateToProps = state => ({
   
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);