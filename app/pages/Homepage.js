// Include React
import React from 'react';
import { Link } from 'react-router';

export default class Homepage extends React.Component{

  // Here we render the function
  render() {

    return (
        <div> 
        	<div className="jumbotron">
			  <h1 className="display-3">DeBugger</h1>
			  <p>DeBugger is a retro style game inspired by Grace Hopper and the everyday life of Web Developer Intern</p>
			</div>

			<div className="card" style="width: 20rem;">
			  <img className="card-img-top" src="..." alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title">How to Play</h4>
			    <p className="card-text">Try to destroy all the bugs before they destroy your javascript files! Along the way you will be hit with trivia questions. Try to kill all the bugs before they create to many errors in your code.</p>
			    <a href="/game" className="btn btn-primary">I'm Ready to DeBug!</a>
			  </div>
			</div>

			<div className="card" style="width: 20rem;">
			  <img className="card-img-top" src="..." alt="Card image cap"/>
			  <div className="card-body">
			    <h4 className="card-title">Gameplay Controls</h4>
			    <p className="card-text">Use the arrows to move your character around the screen. Use the space bar to shoot.</p>
			    <a href="/game" className="btn btn-primary">I'm Ready to DeBug!</a>
			  </div>
			</div>

        </div>
    )
  }
}
