import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import Login from './pages/Login';
import Register from './pages/Register';
import AddPoints from './pages/AddPoints';
import AddPolygons from './pages/AddPolygons';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Map />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addPoints" element={<AddPoints />} />
        <Route path="/addPolygon" element={<AddPolygons />} />
      </Routes>
    </div>
  );
}

export default App;
