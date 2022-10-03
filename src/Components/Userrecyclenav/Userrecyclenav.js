import React from 'react'
import { Link } from 'react-router-dom'
import "../Userrecyclenav/userrecyclenav.css"
const Userrecyclenav = () => {
  return (
  <>
  
  <div className="navs">
<div className="flexim">



<div className="bulletin">

<ul>
<li><Link className='active-linker' to= "/userwaste">Form</Link></li>
<li><Link className='linkss' to= "/activeorder">Active Orders</Link></li>
<li><Link className='linkss' to= "/completedorder">Concluded Orders</Link></li>


</ul>

</div>
</div>

  </div>
  
  
  </>
  )
}

export default Userrecyclenav