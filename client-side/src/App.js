import React from 'react';
import Navbar from './Components/Navbar';
import {Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div classNamey="App">
        <Navbar />
          <Routes> 
              <Route exact path = "/" element = {<Home />}> </Route>
          </Routes>
    </div>
  );
}

export default App;
