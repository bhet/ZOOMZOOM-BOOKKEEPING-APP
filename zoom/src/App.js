import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter , Route, Switch } from 'react-router-dom'

//components
import TransactionRecord from './components/TransactionRecord';
import Home from './components/Home';
import Entryform from './components/DailyTransactionForm';
import Main from './components/main';
import NavBar from './components/Navbar'
import Signup from './components/Signup';

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render(){
    return (
      <BrowserRouter>

        <ApolloProvider client={client}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/main" component={Main}/>
            <Route path="/dash" component={TransactionRecord}/>
            <Route path="/post" component={Entryform}/>
            <Route path="/signup" component={Signup}/>
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
