
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
const checkLogin = (auth) => () => {
   console.log('sdfsdfsdfsdfsdfsdfsdffmmmmmmmmmmmm')
   console.log(auth)
   if(auth.email=="admin" && auth.password=="admin"){
    
       browserHistory.push('/dashboard')
   }  else{
    
       alert('error')
   }  
}
export default checkLogin



//Testing LOGIN

// const checkLogin = (auth) => {
//     console.log(auth)
//     if(auth.email=="admin" && auth.password=="admin"){
//         console.log("Test Passed")
//         return true;
//          browserHistory.push('/dashboard')
//     }  else{
//         console.log("Test Failed")
//         return false;
//      //    alert('error')
//     }  
//  }
//  module.exports = checkLogin;