import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { Button } from 'react-bootstrap';
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import RoutesContainer from '../../containers/Routes'
// const electron = require('electron');
// const child=require('child_process').exec;
// var excecpath="D:/Crossmatch/UCW_Client/UCW_Client/FiddlerSetup.exe";
class Dashboard extends Component { 
  

    // handleClick() {
    //     child(excecpath, function (err,data) {
    //         if(err){
    //             console.error(err)
    //             return;
    //         }
    //         console.log(data.toString())
    //     });
    //     // hashHistory.push('/emoji');
    //     // const BrowserWindow = electron.remote.BrowserWindow;
        
    //     // const childWindow = new BrowserWindow({
    //     //    width: 400,
    //     //    height: 600
    //     // });
    //     // childWindow.loadURL(`file://D:/running/electron-react-seed/plugin/electron-react-seed/src/renderer/index.html`);
    //     // childWindow.show();
    //   }

 //array 

  render() {
    
    return (
      <div style={{overflow:"hidden"}}>

        <div className="row" style={{overflow:"hidden"}}>
            <Navbar/>
        <div className="col-md-2">
            <Sidebar/>
        </div>
        <div className="col-md-10">
            <RoutesContainer />
            {/* <button  onClick={this.handleClick}>mmmmmmmmm</button> */}
        </div>

    </div>
      </div>
   
    

      
    );
  }
}
export default Dashboard;

