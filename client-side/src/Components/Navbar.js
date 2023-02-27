import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
            <div className = "navbar-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'2%',backgroundColor:'lightcyan'}}>
                  <div className = "first-nav-side"> Insight  </div>
                  <div className = "second-nav-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
                    <span> <Link to = "/login"> Login  </Link> </span>
                    <span> <Link to = "/signup"> Signup  </Link> </span>
                    <span> <Link to = "/createpost"> CreatePost  </Link> </span>
                  </div>
            </div>
    </div>
  )
}

export default Navbar