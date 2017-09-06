// Inclue the React library
<<<<<<< HEAD
import React from "react";

// Include the react-router module
// Include the Router component to contain all our Routes
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "../components/Main";
import Homepage from "../pages/Homepage";
import Signup from "../components/Signup";

// Include the Route component for displaying individual routes
// Include the IndexRoute (catch-all route)
=======
import React from 'react';

// Include the react-router module
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

// Reference the high-level components
import Main from '../components/Main';
>>>>>>> 5a754436ddfd6ba640bce1ff50ad2fa4b2173358

// Export the Routes
export default (

  // The high level component is the Router component
<<<<<<< HEAD
  <Router>
	<Main>
  	  <Switch>
	    <Route exact path="/" component={Homepage}/>
	    <Route path="/signup" components={Signup}/>

	  	
	  </Switch>
  	</Main>
=======
  <Router history={browserHistory}>
    <Route path="/" component={Homepage}>

    </Route>
>>>>>>> 5a754436ddfd6ba640bce1ff50ad2fa4b2173358
  </Router>
  
);