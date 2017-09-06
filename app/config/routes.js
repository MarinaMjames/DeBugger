// Inclue the React library
import React from 'react';

// Include the react-router module
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

// Reference the high-level components
import Main from '../components/Main';

// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>
  
);