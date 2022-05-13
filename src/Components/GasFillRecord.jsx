import React from 'react'

function GasFillRecord({ fillUpRecord, updateFillUpRecord, deletefillUpRecord }) {
  return (
    <div className='fillUpRecord'>
        <div className='fillUpRecordData'>
          <p>Price: { fillUpRecord.price }</p>
          <p>Miles Driven: { fillUpRecord.miles_driven }</p>
          <p>Part Name: { fillUpRecord.part_name }</p>
          <p>Date of Service: { fillUpRecord.date_of_service }</p>
          <img src={fillUpRecord.receipt} />
        </div>
        <div className='fillUpRecordButtons'>
          <i className="far fa-trash-alt" onClick={() => {deletefillUpRecord(fillUpRecord)}} />
        </div>
      </div>
  )
}

export default GasFillRecord;
