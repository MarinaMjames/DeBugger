// Include React
var React = require ("react");

var Link = require ("react-router");

import Navbar from "../components/Navbar";

class Main extends React.Component{

  // Here we render the function
  render() {

    return (
      <div>
      <Navbar />
        {this.props.children}
      </div>
    )
  }
}

// Export the component back for use in other files
export default Main;
