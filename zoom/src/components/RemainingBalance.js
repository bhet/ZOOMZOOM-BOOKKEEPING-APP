import React, { Component } from 'react';
import { Table, hover, Button } from 'reactstrap';
import { sumForcash } from '../utilities/index';
import { Link} from 'react-router-dom';


class RemainingBalance extends Component{
  render(){
    const data = this.props.remainingBalance;
    return (
      <div>
        <div className="col">
            <h4>Daily Remaining Balance in Store Table</h4>
        <Table hover bordered style={{overflowX: "scroll"}}>
             <thead>
               <tr>
                 <th>DATE</th>
                 <th>Checks</th>
                 <th>Cash</th>
                 <th>Change</th>
                 <th>Total</th>
               </tr>
             </thead>
             <tbody>
               {
                 (data.loading)?
                 <tr><td>Loading Transactions...</td></tr>
                 : data.remainingbalances.map(item =>{
                   return(
                     <tr key={item.id}>
                          <th scope="row">{item.date.slice(0,10)}</th>
                          <td>{item.checks}</td>
                          <td>{item.cash}</td>
                          <td>{item.change}</td>
                          <td>{sumForcash(item)}</td>
                          <td><Button color="warning"><Link to={`/update/${item.id}`}>Update</Link></Button></td>
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

export default RemainingBalance;
