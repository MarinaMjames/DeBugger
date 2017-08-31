// Include React
var React = require ("react");

var Link = require ("react-router");

class Navbar extends React.Component{

  // Here we render the function
  render() {

    return (
      <div class="col-xs-12 col-md-12">
      <img src=""/> <span>DeBugger</span>
     	<div class="tabs">
     		<a href="" title="" class="tab">Home</a>
     		<a href="" title="" class="tab">Stats</a>
     		<a href="" title="" class="tab">Leaderboard</a>
     	</div>
      </div>
    )
  }
}

// Export the component back for use in other files
export default Navbar;
