// Include React
import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component{

  // Here we render the function
  render() {

    return (
      <div className="col-xs-12 col-md-12">
      <span>DeBugger</span>
     	<div className="tabs">
     		<a href="/signup" title="" className="tab">Sign Up</a>
     		<a href="" title="" className="tab">Stats</a>
     		<a href="" title="" className="tab">Leaderboard</a>
     	</div>
      </div>
    )
  }
}
