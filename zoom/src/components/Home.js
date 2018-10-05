import React, { Component } from 'react';




class Home extends Component {
  render(){
    return (<div className="back">
      <div className="div-center">
        <div className="content">

          <h3>Login</h3>
          <hr/>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User Name</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <hr/>

            <button type="button" className="btn btn-link">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
      )
  }

}
export default Home;
