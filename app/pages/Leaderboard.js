// Include React
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import helpers from '../utils/helpers';

export default class Signup extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      Leaderboard: []
    }
  }

  componentDidMount() {
    helpers.getScores().then((response) => {
        this.setState({ Leaderboard: response.data })
    });
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
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{leaders.username}</td>
                    <td>{leaders.points}</td>
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









