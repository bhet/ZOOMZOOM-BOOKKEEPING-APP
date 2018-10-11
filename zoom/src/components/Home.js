import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  state={
    username: '',
    password:''
  };
  handleSubmit = (event)=>{
    event.preventDefault();
    this.props.logIn(this.state.username, this.state.password);
    this.props.history.push('/user/dash')
  }
  render(){
    return (<div className="back">
      <div className="div-center">
        <div className="content">
          <h3>Login</h3>
          <hr/>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User Name</label>
              <input type="text" className="form-control"
                id="exampleInputEmail1"
                placeholder="username"
                onChange={(e)=>this.setState({username:e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control"
                id="exampleInputPassword1" placeholder="Password"
                onChange={(e)=>this.setState({password:e.target.value})}/>
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
