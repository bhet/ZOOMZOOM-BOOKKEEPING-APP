import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import RequireAuth from './utilities/RequireAuth';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import 'tachyons';

//components
import TransactionRecord from './components/TransactionRecord';
import Home from './components/Home';
import Entryform from './components/DailyTransactionForm';
import Main from './components/MainDash';
import TopNav from './components/Navbar'
import CreateUser from './components/CreateUser';
import Transaction from './components/TransactionRecord';
import Sidenav from './components/sidenav'
import ExtraCashUpdate from './components/updateRecord/ExtraCashUpdate';
import CashOutflowUpdate from './components/updateRecord/CashOutflowUpdate';
import RegisterReadingUpdate from './components/updateRecord/RegisterReadingUpdate';
import RemainingBalanceUpdate from './components/updateRecord/RemainingBalanceUpdate';
//apollo client setup

const httpLink = createHttpLink({uri: "http://localhost:4000/graphql"})

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql"
// });

// const middlewareLink = new ApolloLink((operation, forward) =>{
//   const token = localStorage.getItem('token');
//   const authorizationHeader = token ? `Bearer ${token}` : null;
//   operation.setContext({
//     headers: {
//       authorization: authorizationHeader
//     }
//   })
//   return forward(operation)
// })
//const httpLinkWithAuthToken = middlewareLink.concat(httpLink);

const authLink = setContext((_, {headers}) =>{
  const token = localStorage.getItem('token');
  return {
    headers:{
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
});


const client = new ApolloClient({
  link:  authLink.concat(httpLink),
  cache: new InMemoryCache()
})

class App extends Component {
  state={
    loggedIn: !!JSON.parse(localStorage.getItem("loggedIn")) || false,
    selected: null
  }

  logIn =()=>{
    localStorage.setItem("loggedIn", "true")
    this.setState({loggedIn : true })
  }

  logOut =()=>{
    localStorage.removeItem("loggedIn")
    this.setState({ loggedIn: false })
  }
  render(){
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <TopNav loggedIn={this.state.loggedIn} logOut={this.logOut}/>
          <Row>
            <Route path="/user" render={() =><Col sm="2"><Sidenav /></Col>} />
            <Col sm="8">
              <Switch>
                <Route exact path="/" render={(props) => <Home {...props} logIn={this.logIn} /> }/>
                <Route path="/user/dash" component={(props) => <RequireAuth {...props} component={Main} isAuthenticated={this.state.loggedIn} /> }/>
                <Route path="/user/post" component={(props) => <RequireAuth {...props} component={Entryform} isAuthenticated={this.state.loggedIn} /> }/>
                <Route path="/user/createuser" component={(props) => <RequireAuth {...props} component={CreateUser} isAuthenticated={this.state.loggedIn} /> }/>
                <Route path="/user/transaction" component={(props) => <RequireAuth {...props} component={Transaction} isAuthenticated={this.state.loggedIn} /> }/>
                <Route path="/user/update/cash/:id" component={(props) => <RequireAuth {...props} component={ExtraCashUpdate} isAuthenticated={this.state.loggedIn} /> }/>
                <Route path="/user/update/register/:id" component={(props) => <RequireAuth {...props} component={RegisterReadingUpdate} isAuthenticated={this.state.loggedIn} /> }/>
                <Route path="/user/update/cashoutflow/:id" component={(props) => <RequireAuth {...props} component={CashOutflowUpdate} isAuthenticated={this.state.loggedIn} /> }/>
                <Route path="/user/update/balance/:id" component={(props) => <RequireAuth {...props} component={RemainingBalanceUpdate} isAuthenticated={this.state.loggedIn} /> }/>
              </Switch>
            </Col>
          </Row>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
