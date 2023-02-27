import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

   const [name,setname] = useState("")
   const [email,setemail] = useState("")
   const [password,setpassword] = useState("")

   const handlesignup = () => {

   }

  return (
    <div>
        
      <div className = "mycard-signup" style = {{display:'flex',justifyContent:'center',paddingTop:'4%'}}>
         <div className = "signup-card auth-card" style = {{width:'35%',padding:'3%'}}>

          <form onSubmit = {handlesignup}>
            
              <span style = {{fontSize:'23px'}}> Instagram  </span>
              <span> <input type = "text"  placeholder = 'name'  
               value = {name}  onChange = {(e) => setname(e.target.value)}  required/> </span>

              <span> <input type = "email"  placeholder = 'email'  
              value = {email}  onChange = {(e) => setemail(e.target.value)}  required/> </span>

              <span> <input type = "password"  placeholder = 'password'  
              value = {password}  onChange = {(e) => setpassword(e.target.value)}   required/> </span>
              <span style = {{paddingBottom:'6%'}}> 

              <button className = 'login-btn' style = {{padding:'2% 5%'}}> SIGNUP  </button>
              </span>
              <span> <Link to = "/login"> Already have an account ?  </Link>
              </span>
            
          </form>
         </div>
      </div>

    </div>
  )
}

export default Signup