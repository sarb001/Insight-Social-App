import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MainContext } from '../Reducers/Context';

const Navbar = () => {

  const {state,dispatch} = useContext(MainContext);
  console.log('state in nav is ',state);
  const navigate = useNavigate();

  const handlelogout = () => {
       localStorage.clear()
       dispatch({type:"CLEAR"})
       navigate('/login')
  }

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
                                        <li> <Link to = "/profile">    Profile   </Link>  </li>
                                        <li>  <button onClick={() => handlelogout()}> Logout </button>  </li>
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