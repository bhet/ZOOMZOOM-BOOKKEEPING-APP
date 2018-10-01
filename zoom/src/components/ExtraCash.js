import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getExtraCashes } from '../queries/queries';
import { Table } from 'reactstrap';


//
class Extracash extends Component{

  render(){
     const data = this.props.data;
     console.log("data", data);
    return (
      <div id="trans-record">
        <div className="col">
            <h4>Daily Cash inflow Table</h4>
        <Table bordered style={{overflowX: "scroll"}}>
             <thead>
               <tr>
                 <th>DATE</th>
                 <th>Yesterday_Cash</th>
                 <th>Cash_From_Bank</th>
                 <th>Cash_From_ATM</th>
                 <th>Orlandi_Valuta</th>
                 <th>Money_Order</th>
                 <th>Money_Gram</th>
                 <th>Lotto_Lottery</th>
                 <th>Individual</th>
                 <th>Total</th>
               </tr>
             </thead>
             <tbody>
               {
                 data.loading ?
                   <div>Loading Transactions...</div>
                  : data.extracashes.map(item =>{
                     return (
                       <tr key={item.id}>
                          <th scope="row">{item.date}</th>
                          <td>{item.yesterday_cash}</td>
                          <td>{item.cash_from_bank}</td>
                          <td>{item.cash_from_atm}</td>
                          <td>{item.orlandi_valuta}</td>
                          <td>{item.money_order}</td>
                          <td>{item.money_gram}</td>
                          <td>{item.lotto_lottery}</td>
                          <td>{item.individual}</td>
                          <td>{item.total}</td>
                        </tr>
                     );
                   })
                 }
             </tbody>
           </Table>
         </div>
      </div>
    )
  }
}

export default Extracash;
