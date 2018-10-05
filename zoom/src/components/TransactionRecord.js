import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  getExtraCashes,
  getRegisterReading,
  getCashOutflow,
  getRemainingBalance
 } from '../queries/queries'



//components
import Extracash from './ExtraCash';
import RegisterReading from './RegisterReading';
import CashOutflow from './CashOutflow';
import RemainingBalance from './RemainingBalance';

class TransactionRecord extends Component{

  render(){

    const extraCash = this.props.getExtraCashes;
    const registerReading = this.props.getRegisterReading;
    const cashOutflow = this.props.getCashOutflow;
    const remainingBalance = this.props.getRemainingBalance;
    return (
      <div id="trans-record">
        <Extracash extraCash={extraCash} />
        <RegisterReading registerReading={registerReading}/>
        <CashOutflow cashOutflow={cashOutflow}/>
        <RemainingBalance remainingBalance={remainingBalance}/>
      </div>
    );
  }
}

export default compose(
  graphql(getExtraCashes, { name: "getExtraCashes"}),
  graphql(getRegisterReading, { name: "getRegisterReading"}),
  graphql(getCashOutflow, {name: "getCashOutflow"}),
  graphql(getRemainingBalance, {name: "getRemainingBalance"})
)(TransactionRecord);
