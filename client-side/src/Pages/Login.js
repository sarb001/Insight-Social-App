import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../App';

const Login = () => {

    const { state ,dispatch } = useContext(UserContext);
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("")
    const navigate = useNavigate();

      const handlelogin = async(e) => {

        e.preventDefault();
        if(!email || !password){
          toast.warn(' Please Fill all the Fields ')
        }
  
      try{
        const config = {
          headers : { 'Content-type' : 'application/json' },
       }
  
        const {data} = await axios.post('/login' , 
        {
         email,password}, 
         config);
         console.log('data in Login is',data);

          localStorage.setItem('jwt',data.token)
          localStorage.setItem('user',JSON.stringify(data))   // name ,email , token ,id

         dispatch({type:"USER",payload :data.user})
         toast.success(' Successfully Logged In ')

          navigate('/');
      }catch(error)
      {
        toast.error(' Wrong Credentials Client  ')
      }
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