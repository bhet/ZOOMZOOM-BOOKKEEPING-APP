import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import TransactionRecord from './components/TransactionRecord';

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <TransactionRecord />
      </div>
  </ApolloProvider>
    );
  }
}

export default App;
