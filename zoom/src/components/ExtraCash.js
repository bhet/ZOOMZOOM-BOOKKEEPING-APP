import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { sumForcash } from '../utilities/index';
import { Link } from 'react-router-dom';

//component
import TotalCashInflow from './TotalCashInflow';


class Extracash extends Component{


  render(){
     const data = this.props.extraCash;

    return (
      <div id="extra-cash">
        <div className="col">
            <h4>Daily Extra Cash Table</h4>
        <Table hover bordered style={{overflowX: "scroll"}}>
             <thead>
               <tr>
                 <th>DATE</th>
                 <th>Yesterday Cash</th>
                 <th>Cash From Bank</th>
                 <th>Cash From ATM</th>
                 <th>Orlandi Valuta</th>
                 <th>Money Order</th>
                 <th>Money Gram</th>
                 <th>Lotto Lottery</th>
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
                          <td><TotalCashInflow totalExtraCash={sumForcash(item)}  /></td>
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

export default Extracash;
