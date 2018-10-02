import React, { Component } from 'react';

const TotalCashInflow = (props) =>{
  console.log("props", props);
  return (
    <div>
      <div>{props.totalRegisterReading}</div>
      <div>{props.totalExtraCash} </div>
    </div>

  )
}
export default  TotalCashInflow;
