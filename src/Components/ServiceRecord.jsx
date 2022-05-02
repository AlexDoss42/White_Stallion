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
          <p>Miles Driven: { serviceRecord.milesDriven }</p>
          <p>Part Name: { serviceRecord.partName }</p>
          <p>Date of Service: { serviceRecord.dateOfService }</p>
        </div>
        <div className='serviceRecordButtons'>
 {/* Edit Button */}
          <i 
          className="far fa-edit"
          onClick={toggleEdit}
          ></i>
{/* Delete Button */}
          <i 
          className="far fa-trash-alt"
          onClick={() => {deleteServiceRecord(serviceRecord)}}
          ></i>
        </div>
      </div>
    )
}

export default ServiceRecord;
