// Include React
import React from 'react';
import { Link } from 'react-router';

const Homepage = () => {

  // Here we render the function

  	return (


        <div className="uk-animation-fade"> 
        	<div className="jumbotron">
        	<div className="container">
			  <h1 className="display-3">DeBugger</h1>
			  <p>DeBugger is a retro style game inspired by Grace Hopper and the everyday life of Web Developer Intern</p>
			</div>
			</div>

			<div className="card pull-right uk-animation-scale-down">
			  <div className="card-body">
			    <h4 className="card-title">How to Play</h4>
			    <p className="card-text">Try to destroy all the bugs before they destroy your javascript files! Along the way you will be hit with trivia questions. Try to kill all the bugs before they create to many errors in your code.</p>
			    <a href="/game" className="btn btn-primary">I'm Ready to DeBug!</a>
			  </div>
			</div>

			<div className="card pull-right uk-animation-scale-down" >
			  <div className="card-body">
			    <h4 className="card-title">Gameplay Controls</h4>
			    <img className="card-img-top" src="https://user-images.githubusercontent.com/26077051/30301471-01354f4e-9729-11e7-8996-605bfa97a10f.png" />
			  <img className="card-img-top" src="https://user-images.githubusercontent.com/26077051/30301527-48ea7080-9729-11e7-8c81-84b5fdf4b6e3.png" />
			    <p className="card-text">Use the arrows to move your character around the screen. Use the space bar to shoot.</p>
			    <a href="/game" className="btn btn-primary">I'm Ready to DeBug!</a>
			  </div>
			</div>

        </div>
  	)
		   
}


export default Homepage;
