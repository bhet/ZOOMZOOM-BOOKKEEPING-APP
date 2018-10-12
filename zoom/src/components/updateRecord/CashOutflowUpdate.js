import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';

import { getCashOutflowById,
  updateCashOutflow,
  getCashOutflow
 } from '../../queries/queries';

class CashOutflowUpdate extends Component{
  state ={
    loaded: false,
    cashoutflow:{
      id: this.props.match.params.id,
      vendor_paidout: 0,
      credit_card: 0,
      lotto_lottery: 0,
      bank_deposit: 0,
      atm_deposit: 0,
      money_order: 0,
      money_gram: 0,
      individual: 0
    }
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    this.props.updateCashOutflow({
      variables:{
        id: this.state.cashoutflow.id,
        vendor_paidout: this.state.cashoutflow.vendor_paidout,
        credit_card: this.state.cashoutflow.credit_card,
        lotto_lottery: this.state.cashoutflow.lotto_lottery,
        bank_deposit: this.state.cashoutflow.bank_deposit,
        atm_deposit: this.state.cashoutflow.atm_deposit,
        money_order: this.state.cashoutflow.money_order,
        money_gram: this.state.cashoutflow.money_gram,
        individual: this.state.cashoutflow.individual
      },
      refetchQueries: [{query: getCashOutflow}]
    }).then(res => this.props.history.push('/user/transaction'))
  }
  componentDidMount(){
    if(this.props.data.loading){
      return
    }
    else{
      this.setState({
        extracashes: this.props.data.cashOutflow,
        loaded:true
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.data.loading){
      return
    }
    if(!this.state.loaded){
      this.setState({
        cashoutflow: this.props.data.cashOutflow,
        loaded:true
      })
    }
  }
  render(){
    const date = this.props.data.loading ?
    <p>Data Loading...</p>
    : this.props.data.cashOutflow.date.slice(0, 10);
    const id = this.props.match.params.id;
    let cashOutflow = this.props.data.loading ?
    <p>Data is Loading...</p>
    : this.state.cashoutflow
    if(!cashOutflow){
      cashOutflow = <p>Data is Loading...</p>
    }
    return (
      <div>
        <h4>Update CashOutflow(Total Vendor paidout) on {date}</h4>
        <Form onSubmit={this.handleSubmit}>
          <div className='col border-info'>
            <div className="extracash">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Vendor paidout in $</span>
              <input type="number" step="any"
              value={cashOutflow.vendor_paidout}
              onChange={event=>this.setState({cashoutflow: {...this.state.cashoutflow, vendor_paidout:parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Credit Card in $</span>
              <input type="number" step="any" className="form-control"
              value={cashOutflow.credit_card}
              onChange={event=>this.setState({cashoutflow: {...this.state.cashoutflow, credit_card: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Lotto&Lottery Paid in $</span>
              <input type="number" step="any" className="form-control"
              value={cashOutflow.lotto_lottery}
              onChange={event=>this.setState({cashoutflow:{...this.state.cashoutflow, lotto_lottery: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Bank Deposit in $</span>
              <input type="number" step="any" className="form-control"
              value={cashOutflow.bank_deposit}
              onChange={event=>this.setState({cashoutflow:{...this.state.cashoutflow,  bank_deposit: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Atm Deposit  $</span>
              <input type="number" step="any" className="form-control"
              value={cashOutflow.atm_deposit}
              onChange={event=>this.setState({cashoutflow:{...this.state.cashoutflow, atm_deposit: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Money Order Paid $</span>
              <input type="number" step="any" className="form-control"
              value={cashOutflow.money_order}
              onChange={event=>this.setState({cashoutflow:{...this.state.cashoutflow, money_order: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Money Gram Paid  $</span>
              <input type="number" step="any" className="form-control"
              value={cashOutflow.money_gram}
              onChange={event=>this.setState({cashoutflow:{...this.state.cashoutflow, money_gram: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Individual in $</span>
              <input type="number" step="any" className="form-control"
              value={cashOutflow.individual}
              onChange={event=>this.setState({cashoutflow:{...this.state.cashoutflow, individual: parseFloat(event.target.value)}})} required/>
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
  graphql(updateCashOutflow, {name: 'updateCashOutflow'}),
  graphql(getCashOutflow, {name: "getCashOutflow"}),
  graphql(getCashOutflowById, {
  options: (props) =>{
    return {
      variables:{
        id:props.match.params.id
      }
    }
  }
}))(CashOutflowUpdate)
