import React from 'react';

const TotalCashInflow = (props) =>{
  let totalInflow = props.totalExtraCash + props.totalRegisterReading
  return (
    <div>
      <div>{props.totalRegisterReading}</div>
      <div>{props.totalExtraCash} </div>
    </div>
  )
}
export default  TotalCashInflow;
