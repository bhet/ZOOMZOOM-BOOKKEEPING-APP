import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

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
  render(){
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <TopNav />
          <Row>
            <Route path="/user" render={() =><Col sm="2"><Sidenav /></Col>} />
            <Col sm="8">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user/dash" component={Main}/>
                <Route path="/user/post" component={Entryform}/>
                <Route path="/user/createuser" component={CreateUser}/>
                <Route path="/user/transaction" component={Transaction} />
                <Route path="/user/update/cash/:id" component={ExtraCashUpdate}/>
                <Route path="/user/update/register/:id" component={RegisterReadingUpdate}/>
                <Route path="/user/update/cashoutflow/:id" component={CashOutflowUpdate}/>
                <Route path="/user/update/balance/:id" component={RemainingBalanceUpdate}/>
              </Switch>
            </Col>
          </Row>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
