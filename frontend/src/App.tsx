import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Myinfo from './pages/myinfo';
import NavBar from './layouts/header';

import Login from './auth/login';

function App() {
  return (
    <div className='authPage h-screen'>
      <div className='flex justify-end items-center'>
        <Login/>
      </div>
    </div>
  );
}

export default App;

/*

<NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myinfo" element={<Myinfo />} />
      </Routes>
*/