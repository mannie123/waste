import React from 'react'
import "../User/usernavbar.css"
import { Link } from 'react-router-dom'

const Usernavbar = () => {
  return (
  <>
  
  <div className="navbar">
<div className="flex">


<div className="nav">

<h1>logo</h1>
</div>


<div className="bullet">

<ul>
<li><Link className='active-link' to= "/userdashboard">Dashboard</Link></li>
<li><Link className='link' to= "/">Waste</Link></li>
<li><Link className='link' to= "/userrecycle">Recycle</Link></li>
<li><Link className='link' to= "/">Wallet</Link></li>
<li><Link className='link' to= "/">Store</Link></li>

</ul>

</div>
</div>

  </div>
  
  
  </>
  )
}

export default Usernavbar