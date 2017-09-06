// Include React
var React = require ("react");

var Link = require ("react-router");

class Signup extends React.Component{

  // Here we render the function
  render() {

    return (
      <div className="col-xs-12 col-md-12">
        <section className="section">
          <h2 className="text-big">Sign Up</h2>
          <div className="row"> 
            <div className="input">
              <input id="name" placeholder="Name" type="text"/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

// Export the component back for use in other files
export default Signup;
