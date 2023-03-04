import React, { createContext , useEffect, useReducer }  from 'react';
import {Routes ,Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './pages/Createpost';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import { initialState, reducer } from './Reducers/Userreducers';


export const UserContext = createContext();

  const Routing = () => {
    const navigate  = useNavigate();
    
    useEffect(() => { 
        const user = JSON.parse(localStorage.getItem("user"))

        console.log('  useffect runnig i');
        // if(user){
        //   navigate('/')
        // }else{
        //   navigate('/login')
        // }
    },[])

    return( 
      <>
      <Routes>
          <Route exact path = "/"         element = {<Home />}> </Route>
          <Route  path = "/login"         element = {<Login />}> </Route>
          <Route  path = "/signup"        element = {<Signup />}> </Route>
          <Route  path = "/createpost"    element = {<CreatePost />}> </Route>
          <Route  path = "/profile"       element = {<Profile />}> </Route>
          <Route  path = "/profile/:userid" element = {<UserProfile  />}> </Route>
      </Routes>
      </>
    )
  }

function App() {

   const [state,dispatch] = useReducer(reducer,initialState)

   return (
    <div  className = "App">
      <UserContext.Provider value = {{state,dispatch}} >
        <ToastContainer  autoClose = {1000} />
            <Navbar />
                  <Routing /> 
      </UserContext.Provider>
    </div>
  );
}

export default App;
