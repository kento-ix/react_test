import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='bg-slate-300 h-14'>
        <nav>
            <ul className='flex'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/myinfo">About</Link></li>
            </ul>
        </nav>       
    </div>
  );
};

export default NavBar;
