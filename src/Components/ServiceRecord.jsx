import React, { useState } from 'react';
import EditServiceRecord from './EditServiceRecord'

function ServiceRecord({ serviceRecord, updateServiceRecord, deleteServiceRecord }) {

  const [showEdit, setShowEdit] = useState(false);

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  }
    
    return (
// Terinary to determine which "page" to render   
      showEdit ?     
// Edit Page
      <EditServiceRecord 
      serviceRecord = { serviceRecord } 
      updateServiceRecord = { updateServiceRecord } 
      toggleEdit = {toggleEdit} /> 
      :
// Normal Service record to be rendered in the service log
      <div className='ServiceRecord'>
        <div className='serviceRecordData'>
          <p>Price: { serviceRecord.price }</p>
          <p>Miles Driven: { serviceRecord.miles_driven }</p>
          <p>Part Name: { serviceRecord.part_name }</p>
          <p>Date of Service: { serviceRecord.date_of_service }</p>
        </div>
        <div className='serviceRecordButtons'>
          <i className="far fa-edit" onClick={toggleEdit} />
          <i className="far fa-trash-alt" onClick={() => {deleteServiceRecord(serviceRecord)}} />
        </div>
      </div>
    )
}

export default ServiceRecord;
