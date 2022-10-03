import React from 'react'
import "../Userrecyclenavprofile/userrecyclenavprofile.js.css"
import { Link } from 'react-router-dom'
import img6 from "../Userrecyclenavprofile/Ellipse 2.svg"
import img7 from "../Userrecyclenavprofile/Vector.svg"
import img38 from "../Userrecyclenavprofile/Group.svg"

const Userrecyclenavprofile = () => {
  const handleRemove=()=>{
    localStorage.removeItem("wasteUserData")
    window.location.reload()
  }
  return (
    <>
      <div className="navbar_nax">
        <div className="flex_endsa">
          <div className="bullet_careful">
            <img src={img38} alt="" />
            <ul>
              <li><Link className='active-link' to="/userdashboard">Dashboard</Link></li>
              <li><Link className='link' to="/userwaste">waste</Link></li>
              <li><Link className='link' to="/userrecycle">Recycle</Link></li>
              <li><Link className='link' to="/userwallet">wallet</Link></li>
              <li><Link className='link' to="/store">Store</Link></li>
            </ul>
          </div>
            <div className="profile_picture">
              <img onClick={()=> handleRemove()} src={img7} alt="" />
          <Link className='linky' to="/userprofile">
              <div className="middle_place">
                <h3>Sheda House</h3>
                <p>Premium waste Disposers</p>
              </div>
          </Link>
              <img src={img6} alt="" />
            </div>
        </div>
      </div>

    </>
  )
}

export default Userrecyclenavprofile