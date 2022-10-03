import React from 'react'
import { ImUsers } from 'react-icons/im';
import {FaRecycle} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';


function Dashboard_total() {
  return (
    <div className='dt-header'>
      <div className="dt-header-container">
        <div className="dt-header-card">
          {<ImUsers size={27}/>}
          <p className='small-text light'>Total Users</p>
          <p className='large-text bold'>50,700</p>
        </div>
        <div  className="dt-header-card">
          {<FaRecycle size={27}/>}
          <p className='small-text light'>Total Recycle</p>
          <p className='large-text bold'>60,000</p>
        </div>
        <div className="dt-header-card">
          {<FaTrash size={27}/>}
          <p className='small-text light'>Total Waste Disposed</p>
          <p className='large-text bold'>70,000</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard_total