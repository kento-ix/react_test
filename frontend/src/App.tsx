import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Myinfo from './pages/myinfo';
import NavBar from './layouts/header';

function App() {
  return (
    <div className='authPage h-screen'>

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