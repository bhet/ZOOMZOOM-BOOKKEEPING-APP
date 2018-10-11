import React from 'react'
import { withRouter, Link, Route } from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class TopNav extends React.Component {

  render() {
    return this.props.loggedIn ?
    (
        <Navbar color="primary"  dark expand="md">
          <NavbarBrand href="/">ZOOMZOOM</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem color="white">
                <div style={{ color: '#FFF' }} onClick={()=>this.props.logOut()}>Logout</div>
              </NavItem>
            </Nav>
        </Navbar>
    ):
     (
        <Navbar color="primary"  dark expand="md">
          <NavbarBrand href="/">ZOOMZOOM</NavbarBrand>
            <Nav className="ml-auto" navbar>
            </Nav>
        </Navbar>
    );
  }
}

export default withRouter(TopNav);
