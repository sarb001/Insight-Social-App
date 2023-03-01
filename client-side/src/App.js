import React  from 'react';
import {Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './pages/Createpost';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import Signup from './pages/Signup';


function App() {
   return (

    <div  className = "App">
      <ToastContainer  autoClose = {1000} />
                   <Navbar />
              <Routes> 
                <Route exact path = "/"       element = {<Home />}> </Route>
                <Route  path = "/login"  element = {<Login />}> </Route>
                <Route  path = "/signup" element = {<Signup />}> </Route>
                <Route  path = "/createpost" element = {<CreatePost />}> </Route>
              
              </Routes>
    </div>
  );
}

export default App;
