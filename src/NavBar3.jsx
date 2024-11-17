import React from 'react';
import './NavBar.css'; // Optional: create this file for styling
import { NavLink } from 'react-router-dom';

function NavBar3() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      
        <button><NavLink to="/taketest" className={({ isActive }) => (isActive ? 'active' : '')}>Test</NavLink></button>
        {/* <button><Link to="/dashboard">Admin</Link></button> */}
        {/* <button><NavLink to="/view">Marks</NavLink></button>
        <button><NavLink to="/DeleteQues">Delete</NavLink></button> */}
        <button className='log'><NavLink to="/studentlogout">Logout</NavLink></button>
      
    </nav>
  );
}

export default NavBar3;
