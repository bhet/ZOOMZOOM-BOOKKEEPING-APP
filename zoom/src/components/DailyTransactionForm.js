import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'reactstrap';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import '../css/transactionForm.css';
import { addExtraCashMutation,
  getExtraCashes,
  addRegisterReadingMutation,
  addCashOutflowMutation,
  addRemainingBalanceMutation,
  getRegisterReading,
  getCashOutflow,
  getRemainingBalance,
} from '../queries/queries';

class Entryform extends Component{
  state = {
    extracashes: {
      yesterday_cash: 0,
      cash_from_bank: 0,
      cash_from_atm: 0,
      orlandi_valuta: 0,
      money_order: 0,
      money_gram: 0,
      lotto_lottery: 0,
      collect: 0,
      individual: 0
    },
    registerreadings: {
      sale: 0,
      check_cash: 0
    },
    cashoutflows:{
      vendor_paidout: 0,
      credit_card: 0,
      lotto_lottery: 0,
      bank_deposit: 0,
      atm_deposit: 0,
      money_order: 0,
      money_gram: 0,
      individual: 0
    },
    remainigbalances:{
      checks: 0,
      cash: 0,
      change: 0,
    }
  };

  handleSubmit = (event) =>{
    event.preventDefault();
      this.props.addExtraCashMutation({
        variables:{
          yesterday_cash: this.state.extracashes.yesterday_cash,
          cash_from_bank: this.state.extracashes.cash_from_bank,
          cash_from_atm: this.state.extracashes.cash_from_atm,
          orlandi_valuta: this.state.extracashes.orlandi_valuta,
          money_order: this.state.extracashes.money_order,
          money_gram: this.state.extracashes.money_gram,
          lotto_lottery: this.state.extracashes.lotto_lottery,
          collect: this.state.extracashes.collect,
          individual: this.state.extracashes.individual
        },
        refetchQueries: [{query: getExtraCashes}]
      });
      this.props.addRegisterReadingMutation({
        variables:{
          sale: this.state.registerreadings.sale,
          check_cash: this.state.registerreadings.check_cash
        },
        refetchQueries: [{query: getRegisterReading}]
      });
      this.props.addCashOutflowMutation({
        variables:{
          vendor_paidout: this.state.cashoutflows.vendor_paidout,
          credit_card: this.state.cashoutflows.credit_card,
          lotto_lottery: this.state.cashoutflows.lotto_lottery,
          bank_deposit: this.state.cashoutflows.bank_deposit,
          atm_deposit: this.state.cashoutflows.atm_deposit,
          money_order: this.state.cashoutflows.money_order,
          money_gram: this.state.cashoutflows.money_gram,
          individual: this.state.cashoutflows.individual
        },
        refetchQueries: [{query: getCashOutflow}]
      });
      this.props.addRemainingBalanceMutation({
        variables:{
          checks: this.state.remainigbalances.checks,
          cash: this.state.remainigbalances.cash,
          change: this.state.remainigbalances.change
        },
        refetchQueries: [{query: getRemainingBalance}]
      })
  }
  render(){
    return (
      <div className="container" style={{display: 'flex'}}>
      <Form onSubmit={this.handleSubmit}>
        <div className='row'>
          <div className='col border border-info'>
            <h4>Enter Cash Entry of Today</h4>
            <div className="extracash">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Yesterday Cash in $</span>
              <input type="number" step="any"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes: {...this.state.extracashes, yesterday_cash:parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Cash from Bank in $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes: {...this.state.extracashes, cash_from_bank: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text"> Cash from ATM in $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, cash_from_atm: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Orlandi Valuta in $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, orlandi_valuta: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Money Order in  $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, money_order: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Money Gram in $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, money_gram: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Lotto and Lottery in  $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, lotto_lottery: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Collection in $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, collect: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Individual in $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, individual: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
          </div>
          </div>
          <div className='col border border-info'>
          <h4>Enter Register Entry of Today</h4>
          <div className="register">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Sale in $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({registerreadings:{...this.state.registerreadings, sale: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Check Cash Commission in $</span>
              <input type="number" step="any" className="form-control"
              placeholder="0.00"
              onChange={event=>this.setState({registerreadings:{...this.state.registerreadings, check_cash: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
          </div>
        </div>
        <div className='col border border-info'>
          <h4>Enter CashOutflow(Total Vendor paidout) Here</h4>
          <div className="extracash">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Vendor Paidout in $</span>
            <input type="number" step="any"
            placeholder="0.00"
            onChange={event=>this.setState({cashoutflows: {...this.state.cashoutflows, vendor_paidout:parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Credit Card $</span>
            <input type="number" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({cashoutflows: {...this.state.cashoutflows, credit_card: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text"> Lotto&Lottery Paid in $</span>
            <input type="number" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({cashoutflows:{...this.state.cashoutflows, lotto_lottery: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Bank Deposit $</span>
            <input type="number" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({cashoutflows:{...this.state.cashoutflows,  bank_deposit: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">ATM Deposit in  $</span>
            <input type="number" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({cashoutflows:{...this.state.cashoutflows, atm_deposit: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Money Order Paid in $</span>
            <input type="number" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({cashoutflows:{...this.state.cashoutflows, money_order: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Money Gram Paid in  $</span>
            <input type="number" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({cashoutflows:{...this.state.cashoutflows, money_gram: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Individual in $</span>
            <input type="number" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({cashoutflows:{...this.state.cashoutflows, individual: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
        </div>
        </div>
        <div className='col border border-info'>
        <h4>Enter Remaining Balance</h4>
        <div className=" border border-light">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Checks in $</span>
            <input type="number" min="0" max="0" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({remainigbalances:{...this.state.remainigbalances, checks: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Cash in $</span>
            <input type="number" min="0" max="0" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({remainigbalances:{...this.state.remainigbalances, cash: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Changes in $</span>
            <input type="number" min="0" max="0" step="any" className="form-control"
            placeholder="0.00"
            onChange={event=>this.setState({remainigbalances:{...this.state.remainigbalances, change: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
        </div>
      </div>
        </div>
        <Button type="submit" className="btn btn-success">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default compose(
  graphql(addExtraCashMutation, {name: "addExtraCashMutation"}),
  graphql(addRegisterReadingMutation,{name: "addRegisterReadingMutation"}),
  graphql(addCashOutflowMutation,{name: "addCashOutflowMutation"}),
  graphql(addRemainingBalanceMutation,{name: "addRemainingBalanceMutation"}),
  graphql(getExtraCashes, {name: "getExtraCashes"}),
  graphql(getCashOutflow, {name: "getCashOutflow"}),
  graphql(getRemainingBalance, {name: "getRemainingBalance"}),
  graphql(getRegisterReading, {name: "getRegisterReading"})
)(Entryform)
