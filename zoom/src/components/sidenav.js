import React, {Component} from 'react';
import '../css/sidenav.css';
import {  Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { getUsers } from '../queries/queries';

class Sidenav extends Component{

  render(){

    const users = this.props.data.loading ? <p> Data is loading... </p>
  : this.props.data.users.map(item => {
    return (
      <ul>
      <li key={item.id}>{item.username}</li>
      </ul>
    )})
    return (
        <div className="sidenav">
       <ul>
         <li>
           <Link to="/user/dash" style={{color:"#fff"}}>Dash Display</Link>
         </li>
         <li>
           <Link to="/user/transaction" style={{color:"#fff"}}>Transactions Record</Link>
         </li>
         <li>
           <Link to="/user/post" style={{color:"#fff"}}>Transactions Entry Form</Link>
         </li>
         <li>
           <Link to="/user/createuser" style={{color:"#fff"}}>Create User</Link>
         </li>
         <li >
           Users
           {users}
         </li>
       </ul>
     </div>
    )
  }

}
export default graphql(getUsers)(Sidenav)
