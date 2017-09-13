// Include React
import React from 'react';


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Grabs the Routes
import Routes from '../config/routes';
class Main extends React.Component{

  // Here we render the function
  render() {

    return (
      <div>
        <Navbar />
 

        <Footer />
      </div>
    )
  }
};

export default Main;