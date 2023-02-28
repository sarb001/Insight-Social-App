import React , { createContext, useEffect, useReducer } from 'react';
import Navbar from './Components/Navbar';
import {Routes ,Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './Pages/CreatePost';
import { initialState, reducer } from './Reducers/UserReducer';
import Profile from './Pages/Profile';

export const UserContext = createContext();

function App() {

   const [state,dispatch] = useReducer(reducer,initialState)
   const navigate = useNavigate(); 

    useEffect(() => {
       const user =  JSON.parse(localStorage.getItem('user'))

        if(user){
          dispatch({type:'USER',payload :user})
           navigate('/')
        }else{
          navigate('/login')
        }
    },[])

   return (

    <div  className = "App">
      <ToastContainer  autoClose = {1000} />
        <UserContext.Provider value = {{state,dispatch}}>
          <Navbar />
              <Routes> 
                <Route exact path = "/"       element = {<Home />}> </Route>
              
                <Route  path = "/createpost" element = {<CreatePost  />}> </Route>
                <Route  path = "/login"  element = {<Login/>}> </Route>
                <Route  path = "/signup" element = {<Signup />}> </Route>
                <Route  path = "/profile" element = {<Profile />}> </Route>
               
              </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
