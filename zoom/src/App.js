import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter , Link, Route, Switch } from 'react-router-dom'

//components
import TransactionRecord from './components/TransactionRecord';
import Home from './components/Home';

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/dash" component={TransactionRecord}/>
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
