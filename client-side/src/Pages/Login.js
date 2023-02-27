import React, { useState } from 'react'

const Login = () => {

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("")

     const handlelogin = () => {
          
     }

  return (
    <div> 
      <div>
      <div className="mycard" style = {{display:'flex',justifyContent:'center',paddingTop:'4%'}}>
         <div className="card auth-card" style = {{width:'35%',padding:'3%'}}>
            <span style = {{fontSize:'23px'}}> Instagram  </span>

      <form onSubmit = {handlelogin}>
            <span> <input type = "email"  placeholder = 'email'  
            value = {email}    onChange = {(e) => setemail(e.target.value)}  required/> </span>
            <span> <input type = "password"  placeholder = 'password'  
            value = {password}  onChange = {(e) => setpassword(e.target.value)} required /> </span>
            <span style = {{paddingBottom:'6%'}}>
            <button className='login-btn' style = {{padding:'2% 5%'}}> Login here   </button>
            </span>
      </form>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Login