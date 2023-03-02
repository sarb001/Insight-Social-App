import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  const [email,setemail]  = useState("")
  const [password,setpassword] = useState("")
  const navigate = useNavigate();

   const handlelogin = async(e) => {
    e.preventDefault();

    if(!email || !password){
      toast.warn(' PLease Fill All the Fields ');
      return;
    }

    try{
      const config = {
        headers : { 'Content-type' : 'application/json' },
     }

     const {data} = await axios.post('/login', {email,password}
     ,config);

     toast.success(" Successfully Logged In ")
     navigate('/') 

    }catch(error)
    {
      toast.error(' Something Went Wrong')
    }


   }

  return (
    <div> 
            <div className = "mycard-outercontainer" style = {{padding:'5% 12%',width:'50%'}}> 
                <div className = "mycard-container" style = {{backgroundColor:'whitesmoke',padding:'4%'}}>

                  <form onSubmit = {handlelogin}>
                    <input type = "text"  placeholder = "email"     value = {email}  
                    onChange = {(e) => setemail(e.target.value)} />
                    <input type = "text"  placeholder = "password"  value = {password}  
                    onChange = {(e) => setpassword(e.target.value)} />
                    <button> Login  </button> 
                    </form>
                    <span>
                      <Link to = "/signup"> Don't have an Account ? </Link>
                    </span>
                </div>
           </div>
    </div>
  )
}

export default Login