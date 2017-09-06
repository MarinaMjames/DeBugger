// Include React
var React = require ("react");

var Link = require ("react-router");

class Navbar extends React.Component{

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

// Export the component back for use in other files
export default Navbar;
