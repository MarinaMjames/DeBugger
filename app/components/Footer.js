// Include React
import React from 'react';
import { Link } from 'react-router-dom';


export default class Footer extends React.Component{

  // Here we render the function
  render() {

    return (
      <div className="footer col-xs-12 col-md-12">
      	<div>&copy; Copyright 2017 DeBugger <br />
      		<a href="https://github.com/MarinaMjames/DeBugger">Github Repo</a>
      	</div>
      </div>
    )
  }
}


