import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter , Route, Switch } from 'react-router-dom'

//components
import TransactionRecord from './components/TransactionRecord';
import Home from './components/Home';
import Entryform from './components/DailyTransactionForm';
import Main from './components/MainDash';
import TopNav from './components/Navbar'
import CreateUser from './components/CreateUser';
import ExtraCashUpdate from './components/updateRecord/ExtraCashUpdate';
import Transaction from './components/TransactionRecord';
import Sidenav from './components/sidenav'
import { Row, Col } from 'reactstrap'



import Gridlayout from './components/gridTemplate'

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
                <Route path="/user/update/:id" component={ExtraCashUpdate}/>
                <Route path="/user/transaction" component={Transaction} />
              </Switch>
            </Col>
          </Row>


        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
