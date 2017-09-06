// Include React
import React from 'react';
import { Link } from 'react-router';

export default class Homepage extends React.Component{

  // Here we render the function
  render() {

    return (
      <div>
        <div> 
        	<div className="jumbotron">
			  <h1 className="display-3">DeBugger</h1>
			  <p>DeBugger is a retro style game inspired by Grace Hopper and the everyday life of Web Developer Intern</p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">How to Play</a>
			  </p>
			</div>
        </div>
        
      </div>
    )
  }
}
