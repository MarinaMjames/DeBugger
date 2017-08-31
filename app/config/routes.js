// Inclue the React library
import React from "react";

// Include the react-router module
// Include the Router component to contain all our Routes
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "../components/Main";
import Homepage from "../pages/Homepage";
import Navbar from "../components/Navbar";

// Include the Route component for displaying individual routes
// Include the IndexRoute (catch-all route)

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router>
	<Main>
  	  <Switch>
	    <Route exact path="/" component={Homepage}/>
	  	
	  </Switch>
  	</Main>
  </Router>
);