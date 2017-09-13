// Include React
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import helpers from '../utils/helpers';

export default class Signup extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      Leaderboard: [{position: '1', name: 'Marina', score: '1000'},
      {position: '1', name: 'Joe', score: '900'},
      {position: '1', name: 'Andrew', score: '800'}]
    }

    // bind component functions
  }

  // render component
  render() {

    return (

      <div className="">

        <h3>Leaderboard</h3>
        <table className="table">
        	<thead>
	        	<tr>
	        		<th>#</th>
	        		<th>Username</th>
	        		<th>Score</th>
	        	</tr>
        	</thead>
        	<tbody>
            {}
	        	<tr>
	        		<td>1</td>
	        		<td>Joe</td>
	        		<td>100</td>
	        	</tr>
	        	<tr>
	        		<td>1</td>
	        		<td>Joe</td>
	        		<td>100</td>
	        	</tr>
        	</tbody>
        </table>

      </div>
      
    )
  }
}









