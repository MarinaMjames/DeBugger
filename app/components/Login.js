

      <div className="form col-xs-12 col-md-12">

                type="password"
                placeholder="Password"
                name="password"
                value={this.state.user.password}
                onChange={this.onChange}
              />
              {this.state.errors.password && <p className="help is-danger">{this.state.errors.password}</p>}
            </div>
          </div>
        	<button className="button" disabled={this.state.isLoading}>Login</button>
        </form>
      </div>
    )
  }
}


