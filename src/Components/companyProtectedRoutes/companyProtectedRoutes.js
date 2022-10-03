import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom"

const companyProtectedRoutes = ({ children }) => {

    const companyData = JSON.parse(localStorage.getItem("wasteCompanyData"))

    if (companyData) {
        return (
            <div>{children}</div>
        )
    } else {

        return (
            <Navigate to="/companylogin" />
        )
        }
    }

    export default companyProtectedRoutes