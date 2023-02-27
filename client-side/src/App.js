import React from 'react';
import Navbar from './Components/Navbar';
import {Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div classNamey="App">
      <ToastContainer  autoClose = {1000} />

        <Navbar />
          <Routes> 
              <Route exact path = "/"       element = {<Home />}> </Route>
              <Route exact path = "/login"  element = {<Login/>}> </Route>
              <Route exact path = "/signup" element = {<Signup />}> </Route>
          </Routes>
    </div>
  );
}

export default App;
