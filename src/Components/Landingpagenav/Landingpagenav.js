import React from 'react'
import "../Landingpagenav/landingpagenav.css"
import { Link } from 'react-router-dom'
import img39 from "../Landingpagenav/Group (1).svg"



const Landingpagenav = () => {
  return (
   <>
   
   
       
  <div className="navbar_nax_ire">
<div className="flex_endsa_ire">







<div className="bullet_careful_ire">

<img src={img39} alt="" />

<ul>
<li><Link className='active-link_ire' to= "/userdashboard">Home</Link></li>
<li><Link className='link' to= "/userwaste">waste</Link></li>
<li><Link className='link' to= "/userrecycle">Product</Link></li>
<li><Link className='link' to= "/userwallet">Pricing</Link></li>
<li><Link className='link' to= "/store">Reci coin</Link></li>
<li><Link className='link' to= "/store">About Us</Link></li>

</ul>

</div>



<div className="profile_picture_ire">

<div class="dropdown">
<button className='dropbtn'>Login</button>

<div class="dropdown-content">

  <div className="drop_pages">
  <Link to="/userlogin" className='link_pop'> <h1>Login as a user </h1> </Link>

<Link to="/companylogin" className='link_pop'><h1>Login as a company</h1>  </Link>

  </div>


</div>


</div>


<div class="dropdown">
<button className='the_signup_area'>Signup</button>

<div class="dropdown-content">

  <div className="drop_pages_p">
   
<Link to="/companysignup" className='link_pop'>  <h1>Signup as a Company  </h1></Link>
<Link to="/usersignup" className='link_pop'><h1>Signup as a User</h1></Link> 







  </div>


</div>
 

</div>

</div>
</div>

  </div>
  
   
   
   </>
  )
}

export default Landingpagenav