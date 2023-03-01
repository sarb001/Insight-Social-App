import React  from 'react';
import {Routes ,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';


function App() {
   return (

    <div  className = "App">
      <ToastContainer  autoClose = {1000} />

              <Routes> 
                <Route exact path = "/"       element = {<Home />}> </Route>
              
                {/* <Route  path = "/createpost" element = {<CreatePost  />}> </Route>
                <Route  path = "/login"  element = {<Login/>}> </Route>
                <Route  path = "/signup" element = {<Signup />}> </Route>
                <Route  path = "/profile" element = {<Profile />}> </Route>
                */}
              </Routes>
    </div>
  );
}

export default App;
