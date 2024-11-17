import React from 'react';
import './NavBar.css'; // Optional: create this file for styling
import { NavLink } from 'react-router-dom';

function NavBar2() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      
        <button><NavLink to="/AddQues">Add</NavLink></button>
        {/* <button><Link to="/dashboard">Admin</Link></button> */}
        <button><NavLink to="/view">Marks</NavLink></button>
        <button><NavLink to="/DeleteQues">Delete</NavLink></button>
        <button className='log'><NavLink to="/logout">Logout</NavLink></button>
      
    </nav>
  );
}

export default NavBar2;
