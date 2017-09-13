// Inclue the React library
import React from "react";

// Include the react-router module
// Include the Router component to contain all our Routes
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../components/Login";
import Signup from "../components/Signup";

// import Game from "../pages/Game";
import helpers from "../utils/helpers.js";



// Include the Route component for displaying individual routes
// Include the IndexRoute (catch-all route)

// Export the Routes
const Routes = () => (

  // The high level component is the Router component
  <Router>

        <div className="page col-xs-12 col-md-12">
            <div className="navbar navbar-default navbar-fixed-top">
              <span>DeBugger</span>
              <div className="container">
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                 <Link to="/" onClick={helpers.userLogout}>Logout</Link>
                <a href="/game">Game</a>
              </div>
            </div>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>

        </div>
      </Router>
  
);

export default Routes;