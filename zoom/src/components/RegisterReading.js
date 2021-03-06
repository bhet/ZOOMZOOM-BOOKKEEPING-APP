import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { sumForcash } from '../utilities/index';
import { Link } from 'react-router-dom';

//component
import TotalCashInflow from './TotalCashInflow';

class RegisterReading extends Component{
  render(){
    const data = this.props.registerReading;
    return (
      <div>
        <div className="col">
            <h4><b>Daily Register Reading</b></h4>
        <Table hover bordered style={{overflowX: "scroll"}}>
             <thead>
               <tr>
                 <th style={{width: 300}}>DATE</th>
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
                          <td><Button color="success"><Link to={`/user/update/register/${item.id}`} style={{color:"#fff"}}>Update</Link></Button></td>
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
