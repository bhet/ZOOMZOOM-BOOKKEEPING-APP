import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { graphql, compose } from 'react-apollo';
import {
  getExtraCashes,
  getRegisterReading,
  getCashOutflow,
  getRemainingBalance
 } from '../queries/queries'

// Components
import Extracash from './ExtraCash';
import RegisterReading from './RegisterReading';
import CashOutflow from './CashOutflow';
import RemainingBalance from './RemainingBalance';

 class Transaction extends React.Component {
    state = {
      activeTab: '1'
    };

  toggle =(tab)=>{
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const extraCash = this.props.getExtraCashes;
    const registerReading = this.props.getRegisterReading;
    const cashOutflow = this.props.getCashOutflow;
    const remainingBalance = this.props.getRemainingBalance;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Extra Cash
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Register Reading
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Cash Outflow
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Remaining Balance
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">

                <Extracash extraCash={extraCash} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <RegisterReading registerReading={registerReading}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
              <CashOutflow cashOutflow={cashOutflow}/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="6">
                <RemainingBalance remainingBalance={remainingBalance}/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
export default compose(
  graphql(getExtraCashes, { name: "getExtraCashes"}),
  graphql(getRegisterReading, { name: "getRegisterReading"}),
  graphql(getCashOutflow, {name: "getCashOutflow"}),
  graphql(getRemainingBalance, {name: "getRemainingBalance"})
)(Transaction);
