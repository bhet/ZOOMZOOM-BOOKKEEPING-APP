import React from 'react'
import { withRouter } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

class TopNav extends React.Component {

  handleLogout = () => {
    this.props.logOut()
    this.props.history.push('/')
  }

  render() {
    return this.props.loggedIn ?
    (
        <Navbar color="primary"  dark expand="md">
          <NavbarBrand href="/">ZOOMZOOM</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem color="white">
                <div style={{ color: '#FFF' }} onClick={()=> this.handleLogout()}>Logout</div>
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
