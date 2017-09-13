// Include React
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import helpers from '../utils/helpers';

export default class Signup extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      Leaderboard: [
        {position: '1', name: 'Moe', score: '1000'},
        {position: '1', name: 'Larry', score: '900'},
        {position: '1', name: 'Curly', score: '800'}
      ]
    }
  }

  // render component
  render() {

    return (

      <div className="">

        <h3>Leaderboard</h3>
        <table className="table">
        	<thead>
	        	<tr>
	        		<th>Pos.</th>
	        		<th>Username</th>
	        		<th>Score</th>
	        	</tr>
        	</thead>
        	<tbody>
            {
              this.state.Leaderboard.map((leaders, index) => {
                return (
                  <tr>
                    <td>{leaders.position}</td>
                    <td>{leaders.name}</td>
                    <td>{leaders.score}</td>
                  </tr>
                );
              })
            }
        	</tbody>
        </table>

      </div>
      
    )
  }
}









