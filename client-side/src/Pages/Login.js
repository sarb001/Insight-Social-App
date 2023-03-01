import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div> 
            <div className = "mycard-outercontainer" style = {{padding:'5% 12%',width:'50%'}}> 
                <div className = "mycard-container" style = {{backgroundColor:'whitesmoke',padding:'4%'}}>
                    <input type = "text"  placeholder = "email" />
                    <input type = "text"  placeholder = "password" />
                    <button> Login  </button> 
                    <span>
                      <Link to = "/login"> Don't have an Account ? </Link>
                    </span>
                </div>
           </div>
    </div>
  )
}

export default Login