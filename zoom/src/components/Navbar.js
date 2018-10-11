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
    return (
      <div>
        <Navbar color="primary"  dark expand="md">
          <NavbarBrand href="/">ZOOMZOOM</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem color="white">
                <Link to="/" style={{ color: '#FFF' }}>Logout</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(TopNav);
