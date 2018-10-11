import React, { Component } from 'react';
import '../css/signup.css';
import { Link } from 'react-router-dom';

class CreateUser extends Component{
  state={
    fullname: '',
    username: '',
    password: '',
    verifypassword: ''
  }

  handleSubmit =(event)=>{
    event.preventDefault();
  }
  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <h1>Create User</h1>

        <fieldset>
          <legend><span className="number">User</span>Your basic info</legend>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name"
            onChange={(e)=>this.setState({fullname: e.target.value})}/>

          <label htmlFor="mail">Username:</label>
          <input type="text" id="username" name="username"
            onChange={(e)=>this.setState({username: e.target.value})}/>

          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="user_email"
            onChange={(e)=>this.setState({email: e.target.value})}/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="user_password"
            onChange={(e)=>this.setState({password: e.target.value})}/>

          <label htmlFor="password">Verify Password:</label>
          <input type="password" id="verifypassword" name="user_password"
            onChange={(e)=>this.setState({verifypassword: e.target.value})}/>
        </fieldset>

        <button type="submit"><Link to="/dash">Create User</Link></button>
      </form>

      </div>
    )
  }
}

export default CreateUser;
