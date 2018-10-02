import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { sumForcash } from '../utilities/index';


//
class Extracash extends Component{

  render(){
     const data = this.props.extraCash;

    return (
      <div id="extra-cash">
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
                   <tr><td>Loading Transactions...</td></tr>
                  : data.extracashes.map((item, i) =>{

                     return (
                       <tr key={item.id}>
                          <th scope="row">{item.date.slice(0,10)}</th>
                          <td>{item.yesterday_cash}</td>
                          <td>{item.cash_from_bank}</td>
                          <td>{item.cash_from_atm}</td>
                          <td>{item.orlandi_valuta}</td>
                          <td>{item.money_order}</td>
                          <td>{item.money_gram}</td>
                          <td>{item.lotto_lottery}</td>
                          <td>{item.individual}</td>
                          <td>{this.props.totalCashInflow[i]}</td>
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
