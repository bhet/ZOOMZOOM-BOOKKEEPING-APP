import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { sumForcash } from '../utilities/index';

//component
import TotalCashInflow from './totalCashInflow';

class RegisterReading extends Component{
  render(){

    const data = this.props.registerReading;
    console.log(data)

    return (
      <div>
        <div className="col">
            <h4>Daily Cash inflow Table</h4>
        <Table bordered style={{overflowX: "scroll"}}>
             <thead>
               <tr>
                 <th>DATE</th>
                 <th>Sale</th>
                 <th>Check Cash</th>
                 <th>Total</th>
               </tr>
             </thead>
             <tbody>
               {

                 (data.loading)?
                 <tr><td>Loading Transactions...</td></tr>
                 : data.registerreadings.map(item =>{

                   return(
                     <tr key={item.id}>
                          <th scope="row">{item.date.slice(0,10)}</th>
                          <td>{item.sale}</td>
                          <td>{item.check_cash}</td>
                          <td><TotalCashInflow totalRegisterReading={sumForcash(item)}  /></td>
                        </tr>
                   )
                 })
               }

             </tbody>
           </Table>
         </div>
      </div>
    )
  }
}

export default RegisterReading;
