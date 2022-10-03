import React, { useState } from 'react'
import {Navigate, useNavigate} from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const userData = JSON.parse(localStorage.getItem("wasteUserData"))
  


    if (userData) {
        return (
            <div>{children}</div>
        )
    } else {
      
        return (
            <Navigate to="/userLogin"/>
        )
    }
}

export default ProtectedRoute