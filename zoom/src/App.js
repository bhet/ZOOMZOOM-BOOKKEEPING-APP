import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import RequireAuth from './utilities/RequireAuth';

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
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  state={
    loggedIn: !!JSON.parse(localStorage.getItem("loggedIn")) || false
  }

  logIn =(username, password)=>{
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
