import React from 'react';
import '../css/sidenav.css';

const Sidenav = ()=>{
  return (
  <div>
    <div className="sidenav">
      <a href="/signup">Create User</a>
      <a href="/post">Transaction Entry Form</a>
      <a href="/dash">DashBoard</a>
      <a href="#contact">Users</a>
    </div>

  </div>
  )
}
export default Sidenav
