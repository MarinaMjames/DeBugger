// Include React

var React = require ("react");

var Link = require ("react-router");

class Login extends React.Component{

  // Here we render the function
  render() {

    return (
      <div className="col-xs-12 col-md-12">
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
      	<button class="button">Login</button>
      </div>
    )
  }
}

// Export the component back for use in other files
export default Login;
