import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div> 
                         <h3> Signup here </h3>  
          <div className="signup-outer-container" style = {{padding:'5% 12%',width:'50%'}}>
                <div className="signup-container" style = {{backgroundColor:'whitesmoke',padding:'4%'}}>
                    <input type = "text" placeholder='Enter your name' />
                    <input type = "email" placeholder='Enter your email here' />
                    <input type = "password" placeholder='Enter your password here' />
                    <button> Signup here </button>
                    <span>
                      <Link to = "/login"> Already have an Account ? </Link>
                    </span>
                </div>
          </div>
    </div>
  )
}

export default Signup