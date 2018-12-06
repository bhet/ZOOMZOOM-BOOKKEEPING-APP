import React from 'react';
import { withRouter } from 'react-router-dom'

class RequireAuth extends React.Component {

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }
    _checkAndRedirect() {

      if (!this.props.isAuthenticated) {
        this.props.history.push('/')
        console.log('not logged in')
      }
    }

    render() {
      let ComposedComponent = this.props.component;
      return (
        <div>
          { this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null }
        </div>
      );
    }
  }

export default withRouter(RequireAuth)
