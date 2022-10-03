import React from 'react'

import Dashboard_total from './Dashboard_total/Dashboard_total';
import Recylcing_history from './Recycling_history/Recylcing_history';
function Admin_dashboard() {
  return (
    <div className='admin-dashboard-con'>
    <div className="admin-dashboard-left">
        <Dashboard_total/>
        <Recylcing_history/>
      </div>
      <div className="admin-dashboard-right">
      
      </div>
      
    </div>
  )
}

export default Admin_dashboard