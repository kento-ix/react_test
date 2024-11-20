import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Myinfo from './pages/myinfo';
import NavBar from './component/navbar';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myinfo" element={<Myinfo />} />
      </Routes>
    </>
  );
}

export default App;
