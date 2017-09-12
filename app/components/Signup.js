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
    this.setState({ errors: {} });
    helpers.userSignup(this.state.user).then((data) => {
      if (data) {
        this.setState({ errors: data });
      } else {
        this.props.history.push('/login');
      }
    });
  }

  // Here we render the function
  render() {

    return (
      <div className="col-xs-12 col-md-12">
        <form onSubmit={this.onSubmit}>
          {this.state.errors.message && <p>{this.state.errors.message}</p>}
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
              {this.state.errors.username && <p>{this.state.errors.username}</p>}
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
              {this.state.errors.email && <p>{this.state.errors.email}</p>}
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
              {this.state.errors.password && <p>{this.state.errors.password}</p>}
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
              {this.state.errors.confirmPassword && <p>{this.state.errors.confirmPassword}</p>}
            </div>
          </div>
          <button className="button">Create Account</button>
        </form>
      </div>
    )
  }
}
