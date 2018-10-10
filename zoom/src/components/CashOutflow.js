import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { sumForcash } from '../utilities/index';
import { Link } from 'react-router-dom';

//component

class CashOutflow extends Component{

  render(){
     const data = this.props.cashOutflow;
     
    return (
      <div id="cash-outflow">
        <div className="col">
            <h4>Daily Cash Outflow Table</h4>
        <Table hover bordered style={{overflowX: "scroll"}}>
             <thead>
               <tr>
                 <th>DATE</th>
                 <th>Vendor Paid</th>
                 <th>Credit Card</th>
                 <th>Lotto Lottery</th>
                 <th>Bank Deposit</th>
                 <th>Atm Deposit</th>
                 <th>Money Order</th>
                 <th>Money Gram</th>
                 <th>Individual</th>
                 <th>Total</th>
               </tr>
             </thead>
             <tbody>
               {
                 data.loading ?
                   <tr><td>Loading Transactions...</td></tr>
                  : data.cashoutflows.map((item, i) =>{

                     return (
                       <tr key={item.id}>
                          <th scope="row">{item.date.slice(0,10)}</th>
                          <td>{item.vendor_paidout}</td>
                          <td>{item.credit_card}</td>
                          <td>{item.lotto_lottery}</td>
                          <td>{item.bank_deposit}</td>
                          <td>{item.atm_deposit}</td>
                          <td>{item.money_order}</td>
                          <td>{item.money_gram}</td>
                          <td>{item.individual}</td>
                          <td>{sumForcash(item)}</td>
                          <td><Button color="warning"><Link to={`/update/${item.id}`}>Update</Link></Button></td>
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

export default CashOutflow;
