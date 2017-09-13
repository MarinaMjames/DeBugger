// Include React
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

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
      },
      isLoading: false
    }

    // bind component functions
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // get user inputs and save them to state
  onChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;
    this.setState({ user });
  }

  // submit sign up form
  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    helpers.userSignup(this.state.user).then((data) => {
      // if errors are returned save them to state
      if (!data.success) {
        this.setState({ errors: data.errors, isLoading: false });
      } else {
      // else if user was successfully created proceed to login form
        this.props.history.push('/login');
      }
    });
  }

  // render component
  render() {

    return (

      <div className="form col-xs-6 col-md-6">
        <form onSubmit={this.onSubmit}>
          {this.state.errors.message && <p className="help is-danger has-text-centered">{this.state.errors.message}</p>}
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.user.username}
                onChange={this.onChange}
              />
              {this.state.errors.username && <p className="help is-danger">{this.state.errors.username}</p>}
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
                onChange={this.onChange}
              />
              {this.state.errors.email && <p className="help is-danger">{this.state.errors.email}</p>}
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
                onChange={this.onChange}
              />
              {this.state.errors.password && <p className="help is-danger">{this.state.errors.password}</p>}
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
                onChange={this.onChange}
              />
              {this.state.errors.confirmPassword && <p className="help is-danger">{this.state.errors.confirmPassword}</p>}
            </div>
          </div>
          <button className="button" disabled={this.state.isLoading}>Create Account</button>
        </form>
      </div>
      
    )
  }
}
