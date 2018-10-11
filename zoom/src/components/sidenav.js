import React from 'react';
import '../css/sidenav.css';
import {  Link, Router, Route} from 'react-router-dom';

const Sidenav = ()=>{
  return (
      <div className="sidenav">
     <ul>
       <li>
         <Link to="/user/createuser">Create User</Link>
       </li>
       <li>
         <Link to="/user/post">Transaction Entry Form</Link>
       </li>
       <li>
         <Link to="/user/transaction">Transaction Record</Link>
       </li>
       <li>
         Users
       </li>
     </ul>
   </div>
  )
}
export default Sidenav
