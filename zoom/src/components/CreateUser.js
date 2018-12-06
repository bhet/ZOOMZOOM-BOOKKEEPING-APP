import React, { Component } from 'react';
import '../css/signup.css';
import { graphql, compose } from 'react-apollo';
import { addUser } from '../queries/queries'

class CreateUser extends Component{
  state={
    fullname: '',
    username: '',
    email: '',
    password: ''

  }

  handleSubmit =(event)=>{
    event.preventDefault();
    this.props.addUser({
      variables:{
        fullname: this.state.fullname,
        username: this.state.username,
        email: this.state.username,
        password: this.state.password
      }
    })
    .then((data) => {
      this.props.addUser()
      this.props.history.push('/user/dash')
    })
  }
  render(){
    console.log("user", this.props)
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
        </fieldset>
        <button type="submit">Create User</button>
      </form>
      </div>
    )
  }
}

export default compose(
  graphql(addUser, {name: "addUser"})
)(CreateUser);
