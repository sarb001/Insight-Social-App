import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className = "main-navcontainer" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'1%'}}>
                    <div className="first-navside">
                        <span style = {{fontSize:'28px'}}>  <Link to = "/"> Insight </Link> </span>
                    </div>
                    <div className="second-navside" >
                            <div className="second-navparts" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',fontSize:'25px'}}>
                                <span> <Link to = "/login"> Login  </Link>   </span>
                                <span> <Link to = "/signup"> Signup  </Link>  </span>
                                <span> <Link to = "/createpost"> CreatePost  </Link>  </span>
                            </div>
                    </div>
        </div>
    </div>
  )
}

export default Navbar