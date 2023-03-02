import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

const Navbar = () => {

  const {state,dispatch} = useContext(UserContext);


  return (
    <div>
        <div className = "main-navcontainer" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',padding:'1%'}}>
                    <div className="first-navside">
                        <span style = {{fontSize:'28px'}}>  <Link to = "/"> Insight </Link> </span>
                    </div>
                    <div className="second-navside" >
                            <div className="second-navparts" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',fontSize:'25px'}}>
                                <ul>
                                    {state ? (
                                          <>  
                                        <li> <Link to = "/createpost"> CreatePost  </Link>  </li>
                                        <li> <Link to = "/profile"> Profile   </Link>  </li>
                                          </>
                                          ) : 
                                          <> 
                                            <li> <Link to = "/login"> Login  </Link>   </li>
                                            <li> <Link to = "/signup"> Signup  </Link>  </li>
                                          </> 
                                     }
                                </ul>
                            </div>
                    </div>
        </div>
    </div>
  )
}

export default Navbar