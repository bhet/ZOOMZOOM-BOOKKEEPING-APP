import React, { Component } from 'react';

const TotalCashInflow = (props) =>{
  let totalInflow = props.totalExtraCash + props.totalRegisterReading
  console.log(typeof totalInflow);
  return (
    <div>
      <div>{props.totalRegisterReading}</div>
      <div>{props.totalExtraCash} </div>
    </div>

  )
}
export default  TotalCashInflow;
