import React from 'react'
import { withRouter } from 'react-router-dom';

import {

  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class TopNav extends React.Component {
  logInPaths = [
    '/dash',
    '/addform',
    '/logout'
  ]
  state = {
    isOpen: false,
    isLoggedIn: !!this.logInPaths.filter(item=>item === this.props.location.pathname)[0]
  }


  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    
    let linksToRender = this.state.isLoggedIn ? (
      <React.Fragment>
      <NavItem>
        <a href="/dash" className="nav-link">Dash</a>
      </NavItem>
      <NavItem>
        <a href="/addform" className="nav-link">Everyday Entry</a>
      </NavItem>
      <NavItem>
        <a href="/logout" className="nav-link">Logout</a>
      </NavItem>
    </React.Fragment>
    ):(
      <React.Fragment>
      <NavItem>
        <a href="/login" className="nav-link">Login</a>
      </NavItem>
      <NavItem>
        <a href="/signup" className="nav-link">Signup</a>
      </NavItem>
    </React.Fragment>)
    return (
      <div>
        <Navbar color="primary"  dark expand="md">
          <NavbarBrand href="/">ZOOMZOOM</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

            <Nav className="ml-auto" navbar>
            <NavItem>
              <a href="/" className="nav-link">Home</a>
            </NavItem>
            {linksToRender}
            </Nav>

        </Navbar>
      </div>
    );
  }
}

export default withRouter(TopNav);
