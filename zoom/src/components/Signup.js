import React, { Component } from 'react';


class Signup extends Component{

  render(){
    return (
    <div>
      <form >
        <h1>Sign Up</h1>

        <fieldset>
          <legend><span className="number">User</span>Your basic info</legend>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name"/>

          <label htmlFor="mail">Username:</label>
          <input type="text" id="username" name="username"/>

          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="user_email"/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="user_password"/>

          <label htmlFor="password">Verify Password:</label>
          <input type="password" id="verifypassword" name="user_password"/>
        </fieldset>


        <button type="submit">Sign Up</button>
      </form>

      </div>
    )
  }
}

export default Signup;
