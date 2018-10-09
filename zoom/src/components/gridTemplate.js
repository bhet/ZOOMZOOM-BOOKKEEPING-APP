import React from 'react';
import '../css/main.css';
import {Container, Row, Col} from 'reactstrap';




import { graphql, compose } from 'react-apollo';
import { sumForcash } from '../utilities/index';

import Sidenav from './sidenav.js';


import {
  getLastExtraCashRecord,
  getLastRegisterRecord,
  getLastCashOutflow,
  getLastRemainingBalance
 } from '../queries/queries'


const Gridlayout = (props)=>{
  const extracash = props.getLastExtraCashRecord.loading ?
    <p>Extra Cash is Loading...</p>
    : props.getLastExtraCashRecord.lastRecordOfExtraCash[0];

  const registerInfo = props.lastRegisterRecord.loading ?
  <p>Register Record is Loading</p>
  : props.lastRegisterRecord.lastRecordOfRegister[0];

  const cashOutflow = props.lastCashOutflow.loading ?
  <p>Cash Outflow is Loading</p>
  : props.lastCashOutflow.lastRecordOfCashOutflow[0];

  const remainingBalance = props.lastRemainingBalance.loading ?
  <p>Remaining Balance is Loading...</p>
  : props.lastRemainingBalance.lastRecordOfRemainingBalance[0];
  return (
    <Container>
      <Row>
        <Col sm="2">sidebar</Col>
        <Col>
          <Row>
            <Col>
              <h5>Extra Cash</h5>
              <p>Yesterday Cash:  ${extracash.yesterday_cash}</p>
              <p>Cash from ATM:  ${extracash.cash_from_atm}</p>
              <p>Cash from Bank:  ${extracash.cash_from_bank}</p>
              <p>Cash from Orlandi Valuta:  ${extracash.orlandi_valuta}</p>
              <p>Cash form Money Order:  ${extracash.money_order}</p>
              <p>Cash from Money Gram:  ${extracash.money_gram}</p>
              <p>Cash from Collection:  ${extracash.collect}</p>
              <p>Cash form ....:  ${extracash.individual}</p>
              <p> Total: {sumForcash(extracash)}</p>
            </Col>
            <Col>
              <h5>Cash Outflow</h5>
              <p>Vendor Paidout: ${cashOutflow.vendor_paidout}</p>
              <p>Bank Deposit: ${cashOutflow.bank_deposit}</p>
              <p>ATM Deposit: ${cashOutflow.atm_deposit}</p>
              <p>Money Order: ${cashOutflow.money_order}</p>
              <p>Money Gram: ${cashOutflow.money_gram}</p>
              <p>Lotto&Lottery: ${cashOutflow.lotto_lottery}</p>
              <p>Individual Paid: ${cashOutflow.individual}</p>
              <p>Total: ${sumForcash(cashOutflow)}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Register Reading</h5>
              <p>Sale: ${registerInfo.sale}</p>
              <p>Check's Commission: ${registerInfo.check_cash}</p>
              <p>Total: {sumForcash(registerInfo)}$</p>
            </Col>
            <Col>
              <h5>Remaining Balance</h5>
              <p>Checks: ${remainingBalance.checks}</p>
              <p>Cash: ${remainingBalance.cash}</p>
              <p>Change: ${remainingBalance.change}</p>
              <p>Total: ${sumForcash(remainingBalance)} </p>
            </Col>
          </Row>
          <Row>Row</Row>
        </Col>
      </Row>
    </Container>
  )
}
 export default compose(
  graphql(getLastExtraCashRecord, { name: "getLastExtraCashRecord"}),
  graphql(getLastRegisterRecord, { name: "lastRegisterRecord"}),
  graphql(getLastCashOutflow, { name: "lastCashOutflow"}),
  graphql(getLastRemainingBalance, { name: "lastRemainingBalance"}),
)(Gridlayout)
