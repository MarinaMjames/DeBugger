// Include React
import React from 'react';
import { Link } from 'react-router-dom';

import helpers from '../utils/helpers';

export default class Signup extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;
    this.setState({ user });
  }

  onSubmit(e) {
    e.preventDefault();
    helpers.userSignup(this.state.user).then((data) => {
      console.log('returned data:', data);
    });
  }

  // Here we render the function
  render() {

    return (
      <div className="col-xs-12 col-md-12">
        <form onSubmit={this.onSubmit}>
          {this.state.errors.summary && <p>{this.state.errors.summary}</p>}
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.user.username}
                errorText={this.state.errors.username}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                placeholder="E-mail"
                name="email"
                value={this.state.user.email}
                errorText={this.state.errors.email}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.user.password}
                errorText={this.state.errors.password}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={this.state.user.confirmPassword}
                errorText={this.state.errors.confirmPassword}
                onChange={this.onChange}
              />
            </div>
          </div>
          <button className="button">Create Account</button>
        </form>
      </div>
    )
  }
}
