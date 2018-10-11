import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { updateRemainingBalance,
  getRemainingBalanceById,
  getRemainingBalance
} from '../../queries/queries';

class RemainingBalanceUpdate extends Component{
  state={
    loaded: false,
    remainingbalance: {
      id: this.props.match.params.id,
      checks: 0,
      cash: 0,
      change: 0
    }
  };

  handleSubmit = (event)=>{
    event.preventDefault();
    this.props.updateRemainingBalance({
      variables:{
        id: this.state.remainingbalance.id,
        sale: this.state.remainingbalance.sale,
        check_cash: this.state.remainingbalance.check_cash
      },
      refetchQueries: [{query: getRemainingBalance}]
    }).then(res => this.props.history.push('/user/transaction'))
  }
  componentDidMount(){
    if(this.props.data.loading){
      return
    }
    else{
      this.setState({
        remainingbalance: this.props.data.remainingbalance,
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
        remainingbalance: this.props.data.remainingbalance,
        loaded:true
      })
    }
  }

  render(){
    const id = this.props.match.params.id;
    let remainingBalance = this.props.data.loading ?
    <p>Data is Loading...</p>
    : this.state.remainingbalance
    if(!remainingBalance){
      remainingBalance = <p>Data is Loading...</p>
    }
    return (
      <Form>
        <h4>Enter Register Entry of Today</h4>
        <div className='col border-info'>
        <div className="register">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Checks $</span>
            <input type="number" step="any" className="form-control"
            value={remainingBalance.checks}
            onChange={event=>this.setState({remainingbalance:{...this.state.remainingbalance, checks: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Cash in $</span>
            <input type="number" step="any" className="form-control"
            value={remainingBalance.cash}
            onChange={event=>this.setState({remainingbalance:{...this.state.remainingbalance, cash: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Changes in $</span>
            <input type="number" step="any" className="form-control"
            value={remainingBalance.change}
            onChange={event=>this.setState({remainingbalance:{...this.state.remainingbalance, change: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
        </div>
      </div>
      <Button type="submit" className="btn btn-success">Update</Button>
      </Form>
    )
  }
}

export default compose(
  graphql(updateRemainingBalance, {name: 'updateRemainingBalance'}),
  graphql(getRemainingBalance, { name: "getRemainingBalance"}),
  graphql(getRemainingBalanceById, {
    options: (props) =>{
      return {
        variables:{
          id:props.match.params.id
        }
      }
    }
  })
)(RemainingBalanceUpdate)
