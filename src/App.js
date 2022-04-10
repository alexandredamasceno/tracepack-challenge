import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={ <Map /> } />
      </Routes>
    </div>  
  );
}

export default App;
