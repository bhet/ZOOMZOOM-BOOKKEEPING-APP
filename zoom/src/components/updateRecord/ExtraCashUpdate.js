import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';

import { updateExtraCash,
  getIndividualExtraCash,
  getExtraCashes
} from '../../queries/queries';

class ExtraCashUpdate extends Component{
  state = {
    loaded: false,
    extracashes: {
      id: this.props.match.params.id,
      yesterday_cash: 0,
      cash_from_bank: 0,
      cash_from_atm: 0,
      orlandi_valuta: 0,
      money_order: 0,
      money_gram: 0,
      lotto_lottery: 0,
      collect: 0,
      individual: 0
  }
}

  handleSubmit =(event)=>{
    event.preventDefault();
    this.props.updateExtraCash({
      variables:{
        id: this.state.extracashes.id,
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
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.data.loading){
      return
    }

    if(!this.state.loaded){
      this.setState({
        extracashes: this.props.data.extraCash,
        loaded:true
      })
    }
    console.log(this.state);
  }

  render(){
    const id = this.props.match.params.id;
    let extraCash = this.props.data.loading ?
    <p>Data is Loading...</p>
    : this.state.extracashes
    if(!extraCash){
      extraCash = <p>Data is Loading...</p>
    }

    console.log("extraCash", extraCash);
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div className='col border border-info'>
            <h4>Enter Cash Entry of Today</h4>
            <div className="extracash">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Yesterday Cash in $</span>
              <input type="number" step="any"
              value={extraCash.yesterday_cash} id="yesterday_cash_field"
              onChange={event=>this.setState({extracashes: {...this.state.extracashes, yesterday_cash:parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Cash from Bank in $</span>
              <input type="number" step="any" className="form-control"
              value={extraCash.cash_from_bank} id="cash_from_bank_field"
              onChange={event=>this.setState({extracashes: {...this.state.extracashes, cash_from_bank: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text"> Cash from ATM in $</span>
              <input type="number" step="any" className="form-control"
              value={extraCash.cash_from_atm} id="cash_from_atm_filed"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, cash_from_atm: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Orlandi Valuta in $</span>
              <input type="number" step="any" className="form-control"
              value={extraCash.orlandi_valuta} id="orlandi_valuta_filed"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, orlandi_valuta: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Money Order in  $</span>
              <input type="number" step="any" className="form-control"
              value={extraCash.money_order} id="money_order_field"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, money_order: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Money Gram in $</span>
              <input type="number" step="any" className="form-control"
              value={extraCash.money_gram} id="money_gram_field"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, money_gram: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Lotto and Lottery in  $</span>
              <input type="number" step="any" className="form-control"
              value={extraCash.lotto_lottery}id="lotto_lottery_field"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, lotto_lottery: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Collection in $</span>
              <input type="number" step="any" className="form-control"
              value={extraCash.collect} id="anonymous"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, collect: parseFloat(event.target.value)}})} required/>
              </div>
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              <span className="input-group-text">Individual in $</span>
              <input type="number" step="any" className="form-control"
              value={extraCash.individual} id="anonymous"
              onChange={event=>this.setState({extracashes:{...this.state.extracashes, individual: parseFloat(event.target.value)}})} required/>
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
  graphql(updateExtraCash, {name: 'updateExtraCash'}),
  graphql(getExtraCashes, {name: "getExtraCashes"}),
  graphql(getIndividualExtraCash, {
    options: (props) =>{
      return {
        variables:{
          id:props.match.params.id
        }
      }
    }
  })
)(ExtraCashUpdate)
