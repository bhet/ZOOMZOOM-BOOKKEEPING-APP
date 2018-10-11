import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  hover,
  Button
} from 'reactstrap';
import {graphql, compose} from 'react-apollo';
import {sumForcash} from '../utilities/index';
import {getLastExtraCashRecord,
  getLastRegisterRecord,
  getLastCashOutflow,
  getLastRemainingBalance} from '../queries/queries'

class Main extends Component {
  render() {
    const extracash = this.props.getLastExtraCashRecord.loading
      ? <p>Extra Cash is Loading...</p>
      : this.props.getLastExtraCashRecord.lastRecordOfExtraCash[0];

    const registerInfo = this.props.lastRegisterRecord.loading
      ? <p>Register Record is Loading</p>
      : this.props.lastRegisterRecord.lastRecordOfRegister[0];

    const cashOutflow = this.props.lastCashOutflow.loading
      ? <p>Cash Outflow is Loading</p>
      : this.props.lastCashOutflow.lastRecordOfCashOutflow[0];

    const remainingBalance = this.props.lastRemainingBalance.loading
      ? <p>Remaining Balance is Loading...</p>
      : this.props.lastRemainingBalance.lastRecordOfRemainingBalance[0];

    const toBeAccountedFor = (sumForcash(extracash) + sumForcash(registerInfo)) - sumForcash(cashOutflow);
    const cashCount = sumForcash(remainingBalance);
    const displayColor = toBeAccountedFor > cashCount ?
    (<td className="text-danger"><b>Short</b></td>)
    : (<td className="text-warning"><b>Over</b></td>)
    return (<Container className="main">
      <Row>
        <Col>
          <Row>
            <Col sm={{offset: 2}}>
              <h5>Extra Cash</h5>
              <Table hover bordered style={{overflowX: "scroll"}}>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Amount in $</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Yesterday Cash</td>
                    <td>{extracash.yesterday_cash}</td>
                  </tr>
                  <tr>
                    <td>Cash from ATM</td>
                    <td>{extracash.cash_from_atm}</td>
                  </tr>
                  <tr>
                    <td>Cash from Bank</td>
                    <td>{extracash.cash_from_bank}</td>
                  </tr>
                  <tr>
                    <td>Cash from Orlandi Valuta</td>
                    <td>{extracash.orlandi_valuta}</td>
                  </tr>
                  <tr>
                    <td>Cash form Money Order</td>
                    <td>{extracash.money_order}</td>
                  </tr>
                  <tr>
                    <td>Cash from Money Gram</td>
                    <td>{extracash.money_gram}</td>
                  </tr>
                  <tr>
                    <td>Cash from Collection</td>
                    <td>{extracash.collect}</td>
                  </tr>
                  <tr>
                    <td>Cash form</td>
                    <td>{extracash.individual}</td>
                   </tr>
                   <tr>
                     <td><b>Total</b></td>
                     <td><b>{sumForcash(extracash)}</b></td>
                    </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm={{offset: 2}}>
              <h5>Cash Outflow</h5>
                <Table hover bordered style={{overflowX: "scroll"
                  }}>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Amount in $</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vendor Paidout</td>
                      <td>{cashOutflow.vendor_paidout}</td>
                    </tr>
                    <tr>
                      <td>Bank Deposit</td>
                      <td>{cashOutflow.bank_deposit}</td>
                    </tr>
                    <tr>
                      <td>ATM Deposit</td>
                      <td>{cashOutflow.atm_deposit}</td>
                    </tr>
                    <tr>
                      <td>Money Order Paidout</td>
                      <td>{cashOutflow.money_order}</td>
                    </tr>
                    <tr>
                      <td>Money Gram Paidout</td>
                      <td>{cashOutflow.money_gram}</td>
                    </tr>
                    <tr>
                      <td>Lotto&Lottery Paidout</td>
                      <td>{cashOutflow.lotto_lottery}</td>
                    </tr>
                    <tr>
                      <td>Individual Paid</td>
                      <td>{cashOutflow.individual}</td>
                    </tr>
                    <tr>
                      <td><b>Total</b></td>
                      <td><b>{sumForcash(cashOutflow)}</b></td>
                     </tr>
                  </tbody>
                </Table>
            </Col>
          </Row>
          <Row>
            <Col sm={{offset: 2}}>
              <h5>Register Reading</h5>
              <Table hover bordered style={{overflowX: "scroll"
                }}>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Amount in $</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sale</td>
                    <td>{registerInfo.sale}</td>
                  </tr>
                  <tr>
                    <td>Check's Commission</td>
                    <td>{registerInfo.check_cash}</td>
                  </tr>
                  <tr>
                    <td><b>Total</b></td>
                    <td><b>{sumForcash(registerInfo)}</b></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm={{offset: 2}}>
              <h5>Remaining Balance</h5>
                <Table hover bordered style={{overflowX: "scroll"
                  }}>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Amount in $</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Checks</td>
                      <td>{remainingBalance.checks}</td>
                    </tr>
                    <tr>
                      <td>Cash</td>
                      <td>{remainingBalance.cash}</td>
                    </tr>
                    <tr>
                      <td>Changes</td>
                      <td>{remainingBalance.change}</td>
                    </tr>
                    <tr>
                      <td><b>Total</b></td>
                      <td><b>{sumForcash(remainingBalance)}</b></td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
          </Row>
          <Row>
            <Col sm={{offset: 2}}>
              <h5>Total CashInflow Table</h5>
                <Table hover bordered style={{overflowX: "scroll"
                  }}>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Amount in $</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Extra Cash Total</td>
                      <td>{sumForcash(extracash)}</td>
                    </tr>
                    <tr>
                      <td>Register Reading Total</td>
                      <td>{sumForcash(registerInfo)}</td>
                    </tr>
                    <tr>
                      <td><b>Total</b></td>
                      <td><b>{sumForcash(extracash) + sumForcash(registerInfo)}</b></td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
            <Col sm={{offset: 2}}>
              <h5>Inflow Outflow Balance</h5>
                <Table hover bordered style={{overflowX: "scroll"
                  }}>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Amount in $</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>To be accounted for</td>
                      <td>{toBeAccountedFor}</td>
                    </tr>
                    <tr>
                      <td>Total Cash Count</td>
                      <td>{cashCount}</td>
                    </tr>
                    <tr>
                      <td>{displayColor}</td>
                      <td><b>{toBeAccountedFor - cashCount}</b></td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>)
  }
}

export default compose(
  graphql(getLastExtraCashRecord, {name: "getLastExtraCashRecord"}),
  graphql(getLastRegisterRecord, {name: "lastRegisterRecord"}),
  graphql(getLastCashOutflow, {name: "lastCashOutflow"}),
  graphql(getLastRemainingBalance, {name: "lastRemainingBalance"}),)(Main)
