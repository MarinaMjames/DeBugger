// Include React
import React from 'react';
import { Link } from 'react-router';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class Main extends React.Component{

  // Here we render the function
  render() {

    return (
      <div>
        <Navbar />
          <h1>DeBugger!</h1>
          <Link to='/login'>Click here to login</Link>
          <hr/>
          <Link to='/sign-up'>Click here to sign-up</Link>
          <div>
            {this.props.children}
          </div>
        <Footer />
      </div>
    )
  }
};