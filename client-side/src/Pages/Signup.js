import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {

  const [name,setname]    = useState("")
  const [email,setemail]  = useState("")
  const [password,setpassword] = useState("")
  const navigate = useNavigate();

   const handlesignup = async(e) => { 
    e.preventDefault();

    if(!name ||!email ||!password){
      toast.warn(' PLease Fill All the Fields ');
      return;
    }

    try{
      const config = {
         headers : { 'Content-type' : 'application/json' },
      }

      const { data } = await axios.post('/signup' , 
         {name,email,password} ,config );
         toast.success(' User  is Registered Successfully ')
         navigate('/login');

     }catch(error)
      {
          toast.error(' Something Went Wrong')
      }
  }

  return (
    <div> 
                         <h3> Signup here </h3>  
          <div className="signup-outer-container" style = {{padding:'5% 12%',width:'50%'}}>
                <div className="signup-container" style = {{backgroundColor:'whitesmoke',padding:'4%'}}>
                  <form onSubmit = {handlesignup}>
                      <input type = "text" placeholder='Enter your name' 
                      value = {name}  onChange = {(e) =>  setname(e.target.value)}  />
                      <input type = "email" placeholder='Enter your email here' 
                      value = {email}  onChange = {(e) =>  setemail(e.target.value)}   />
                      <input type = "password" placeholder='Enter your password here' 
                      value = {password}  onChange = {(e) =>  setpassword(e.target.value)}   />
                      <button > Signup here </button>
                      <span>
                        <Link to = "/login"> Already have an Account ? </Link>
                      </span>
                    </form>
                </div>
          </div>
    </div>
  )
}

export default Signup