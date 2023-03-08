import React, { createContext , useContext, useEffect, useReducer }  from 'react';
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
import { MainContext } from './Reducers/Context';

  const Routing = () => {

    const navigate  = useNavigate();
    const {state,dispatch} = useContext(MainContext);

    // useEffect(() => { 
    //     const user = JSON.parse(localStorage.getItem("user"))
    //     console.log(' Useffect running Here '); 
    //     // if(user){
    //     //   navigate('/')
    //     // }else{
    //     //   navigate('/login')
    //     // }
    // },[])

    return( 
      <>
      <Routes>
          <Route  exact path = "/"        element = {<Home />}> </Route>
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

   return (
    <div  className = "App">
        <ToastContainer  autoClose = {1000} />
            <Navbar />
            <Routing /> 
    </div>
  );
}

export default App;
