import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { updateRegisterReading,
  getRegisterReadingById,
  getRegisterReading
} from '../../queries/queries';

class RegisterReadingUpdate extends Component{
  state={
    loaded: false,
    registerreading: {
      id: this.props.match.params.id,
      sale: 0,
      check_cash: 0
    }
  };

  handleSubmit = (event)=>{
    event.preventDefault();
    this.props.updateRegisterReading({
      variables:{
        id: this.state.registerreading.id,
        sale: this.state.registerreading.sale,
        check_cash: this.state.registerreading.check_cash
      },
      refetchQueries: [{query: getRegisterReading}]
    }).then(res => this.props.history.push('/user/transaction'))
  }
  componentDidMount(){
    if(this.props.data.loading){
      return
    }
    else{
      this.setState({
        registerreading: this.props.data.registerreading,
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
        registerreading: this.props.data.registerReading,
        loaded:true
      })
    }
  }

  render(){
    const date = this.props.data.loading ?
    <p>Data Loading...</p>
    : this.props.data.registerReading.date.slice(0, 10);
    const id = this.props.match.params.id;
    let registerReading = this.props.data.loading ?
    <p>Data is Loading...</p>
    : this.state.registerreading
    if(!registerReading){
      registerReading = <p>Data is Loading...</p>
    }
    return (
      <Form>
        <h4>Update Register Reading on </h4>
        <div className='col border-info'>
        <div className="register">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Sale in $</span>
            <input type="number" step="any" className="form-control"
            value={registerReading.sale}
            onChange={event=>this.setState({registerreading:{...this.state.registerreading, sale: parseFloat(event.target.value)}})} required/>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text">Check Cash Commission in $</span>
            <input type="number" step="any" className="form-control"
            value={registerReading.check_cash}
            onChange={event=>this.setState({registerreading:{...this.state.registerreading, check_cash: parseFloat(event.target.value)}})} required/>
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
  graphql(updateRegisterReading, {name: 'updateRegisterReading'}),
  graphql(getRegisterReading, { name: "getRegisterReading"}),
  graphql(getRegisterReadingById, {
    options: (props) =>{
      return {
        variables:{
          id:props.match.params.id
        }
      }
    }
  })
)(RegisterReadingUpdate)
