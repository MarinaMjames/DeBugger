// Include React

import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  // Here we render the function
  render() {

    return (
      <div className="col-xs-12 col-md-12">
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <div className="control">
              <input className="input is-info" type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.onChange}/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-info" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
            </div>
          </div>
        	<button className="button">Login</button>
        </form>
      </div>
    )
  }
}


