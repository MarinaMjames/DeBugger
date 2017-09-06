// Include React
var React = require ("react");

var Link = require ("react-router");

class Signup extends React.Component{

  // Here we render the function
  render() {

    return (
      <div className="col-xs-12 col-md-12">
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" placeholder="Full Name"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" placeholder="E-mail"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="text" placeholder="Username"/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-info" type="password" placeholder="Password"/>
          </div>
        </div>
        <button class="button">Create Account</button>
      </div>
    )
  }
}

// Export the component back for use in other files
export default Signup;
