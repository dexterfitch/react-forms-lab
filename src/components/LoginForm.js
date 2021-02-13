import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  validSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if ((username !== "") && (password !== "")) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.validSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={event => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={event => this.handleInputChange(event)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
