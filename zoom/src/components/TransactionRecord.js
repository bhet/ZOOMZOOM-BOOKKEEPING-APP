import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getExtraCashes } from '../queries/queries'


//components
import Extracash from './ExtraCash';

class TransactionRecord extends Component{

  render(){
    console.log(this.props)
    const { data } = this.props;
    return (
      <div id="trans-record">

        <Extracash data={data}/>
      </div>
    )
  }
}

export default graphql(getExtraCashes)(TransactionRecord);
