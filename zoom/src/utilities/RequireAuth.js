import React, { PropTypes } from 'react';

export default class RequireAuth extends React.Component {


    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      if (!this.props.isAuthenticated) {
        // redirect();
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
