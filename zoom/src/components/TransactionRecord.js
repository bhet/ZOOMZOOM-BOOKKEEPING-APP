import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getExtraCashes, getRegisterReading } from '../queries/queries'
import { sumForcash } from '../utilities/index';

//components
import Extracash from './ExtraCash';
import RegisterReading from './RegisterReading';


class TransactionRecord extends Component{
  state = {
    totalCashInflow: this.props.getExtraCashes.extracashes ? this.props.getExtraCashes.extracashes.map(sumForcash): [],

  }

  render(){

    const extraCash = this.props.getExtraCashes;
    const registerReading = this.props.getRegisterReading;
    console.log("totalCashInflow",this.state.totalCashInflow)

    return (
      <div id="trans-record">
        <Extracash extraCash={extraCash} totalCashInflow={this.state.totalCashInflow}/>
        <RegisterReading registerReading={registerReading}/>
      </div>
    );
  }
}

export default compose(
  graphql(getExtraCashes, { name: "getExtraCashes"}),
  graphql(getRegisterReading, { name: "getRegisterReading"}))(TransactionRecord);
