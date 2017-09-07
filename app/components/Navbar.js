// Include React
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Routes from "../config/routes";
import Homepage from "../pages/Homepage";
import Login from "./Login"
import Signup from "./Signup"


export default class Navbar extends React.Component{

  // Here we render the function
  render() {

    return (
      <Routes/>    
    )
  }
}
