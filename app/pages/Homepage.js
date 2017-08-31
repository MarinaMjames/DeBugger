// Include React
var React = require ("react");

var Link = require ("react-router");

class Homepage extends React.Component{

  // Here we render the function
  render() {

    return (
      <div>
        <h2>Im the HomePage</h2>
        
      </div>
    )
  }
}

// Export the component back for use in other files
export default Homepage;