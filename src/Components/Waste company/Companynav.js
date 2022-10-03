import React from 'react'
import "../Waste company/companynav.css"
import { Link } from 'react-router-dom'
import img6 from "../Waste company/pics.png"
import img7 from "../Waste company/setting.svg"
import img38 from "../Waste company/logo.svg"

const Companynav = () => {
  return (
    <>


      <div className="navbar_nax">
        <div className="flex_endsa">
          <div className="bullet_careful">
            <img src={img38} alt="" />
            <ul>
              <li><Link className='active-link' to="/companydashboard">Dashboard</Link></li>
              <li><Link className='link' to="/companyorder">Orders</Link></li>
              <li><Link className='link' to="/companynotification">Notification</Link></li>
            </ul>
          </div>
          <Link className='linky' to="/userprofile">
            <div className="profile_picture">
              <img src={img7} alt="" />
              <div className="middle_place">
                <h3>Sheda House</h3>
                <p>Premium waste Disposers</p>
              </div>
              <img src={img6} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Companynav