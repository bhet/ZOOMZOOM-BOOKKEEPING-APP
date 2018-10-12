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
      id: this.props.match.params.id,
      checks: 0,
      cash: 0,
      change: 0
    };

  handleSubmit = (event)=>{
    event.preventDefault();
    this.props.updateRemainingBalance({
      variables:{
        id: this.state.id,
        checks: this.state.checks,
        cash: this.state.cash,
        change: this.state.change
      },
      refetchQueries: [{query: getRemainingBalance}]
    }).then(res => this.props.history.push('/user/transaction'))
  };
  componentDidUpdate(prevProps, prevState){
    console.log('the data', prevProps)
    if(this.props.data.loading){
      return
    } else if(!this.props.data.loading){

      if(prevProps.data.remainingBalance) {
        if(this.state.cash == 0) {
          this.setState({ ...this.props.data.remainingBalance })
        }
      }
    }
  }

  render(){
    const date = this.props.data.loading ?
    <p>Data Loading...</p>
    : this.props.data.remainingBalance.date.slice(0, 10);
    const id = this.props.match.params.id;
    let remainingBalance = this.props.data.loading ?
    <p>Data is Loading...</p>
    : this.state.remainingbalance
    if(!remainingBalance){
      remainingBalance = <p>Data is Loading...</p>
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <h4>Update Remaining Balance on {date}</h4>
        <div className='col border-info'>
        <div className="register">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Checks $</span>
            <input type="number" step="any" className="form-control"
            value={this.state.checks}
            onChange={event=>this.setState({checks: parseFloat(event.target.value)})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Cash in $</span>
            <input type="number" step="any" className="form-control"
            value={this.state.cash}
            onChange={event=>this.setState({cash: parseFloat(event.target.value)})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Changes in $</span>
            <input type="number" step="any" className="form-control"
            value={this.state.change}
            onChange={event=>this.setState({change: parseFloat(event.target.value)})} required/>
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
