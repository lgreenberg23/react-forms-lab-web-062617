import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
    //this.props.onSubmit

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  }
  
  handlePwordChange = (event) => {
    this.setState({
      password: event.target.value
    });      
  }

  handleSubmit = (event) => {
    event.preventDefault()    
    return this.state.username !== '' && this.state.password!== '' ? this.props.onSubmit : null
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" 
            value={this.state.username}
            onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" 
            value={this.state.password}
            onChange={this.handlePwordChange}/>
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
