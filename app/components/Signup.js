// Include React

import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component{

  // Here we render the function
  render() {

    return (
      <div className="form col-xs-6 col-md-6">
      <center>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" placeholder="Full Name"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" placeholder="E-mail"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" placeholder="Username"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="password" placeholder="Password"/>
          </div>
        </div>
        <button className="button">Create Account</button>
        </center>
      </div>
      
    )
  }
}
