// Include React
import React from 'react';
import { Link } from 'react-router';

<<<<<<< HEAD
var Link = require ("react-router");

import Navbar from "../components/Navbar";

class Main extends React.Component{
=======
export default class Main extends React.Component{
>>>>>>> 5a754436ddfd6ba640bce1ff50ad2fa4b2173358

  // Here we render the function
  render() {

    return (
      <div>
<<<<<<< HEAD
      <Navbar />
        {this.props.children}
=======
        <h1>DeBugger!</h1>
        <Link to='/login'>Click here to login</Link>
        <hr/>
        <Link to='/sign-up'>Click here to sign-up</Link>
        <div>
          {this.props.children}
        </div>
>>>>>>> 5a754436ddfd6ba640bce1ff50ad2fa4b2173358
      </div>
    )
  }
};