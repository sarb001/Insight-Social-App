import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

const Navbar = () => {

   const {state,dispatch} = useContext(UserContext);

  return (
    <div> 
            <div className = "navbar-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'2%',backgroundColor:'lightcyan'}}>
                     <div className = "first-nav-side">
                        <Link to = "/"> Insight </Link> 
                      </div>
                  <div className = "second-nav-side"  
                  style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>

                      {state ? (
                      <> 
                      <span> <Link to = "/createpost"> CreatePost  </Link> </span>
                      <span> <Link to = "/profile"> Profile  </Link> </span>
                      </>) : (
                      <>
                       <span> <Link to = "/login"> Login  </Link> </span>
                       <span> <Link to = "/signup"> Signup  </Link> </span> 
                      </>)}
                  </div>
            </div>
    </div>
  )
}

export default Navbar