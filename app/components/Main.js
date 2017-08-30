// Include React
var React = require ("react");

var Link = require ("react-router");

class Main extends React.Component{

  // Here we render the function
  render() {

    return (
      <div>
        <h1>Hello World</h1>
        <Link to="/saved">Click here for saved Articles</Link>
        <hr/>
        <Link to="/search">Click here to search for Articles</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

// Export the component back for use in other files
export default Main;
