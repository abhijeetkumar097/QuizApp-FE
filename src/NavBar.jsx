import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Optional: create this file for styling
import { NavLink } from 'react-router-dom';

function NavBar() {
  // return (
  //   <nav className="navbar">
  //     <h2 className="logo">My Quiz</h2>
      
  //       <button><Link to="/" activeClassName="active">Student Login</Link></button>
  //       {/* <button><Link to="/AddQues">Student</Link></button> */}
  //       <button><Link to="/admin">Admin</Link></button>
  //       <button><Link to="/about">About</Link></button>
  //       <button><Link to="/demo">Demo</Link></button>
  //       <button><Link to="/DeleteQues">demo2</Link></button>
      
  //   </nav>
  // );

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <div className="nav-buttons">
      <button>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Student
        </NavLink>
      </button>
      <button>
        <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
          Admin
        </NavLink>
      </button>
      <button>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>
      </button>
      {/* 
      <button>
        <NavLink to="/demo" className={({ isActive }) => (isActive ? 'active' : '')}>
          Demo
        </NavLink>
      </button>
      <button>
        <NavLink to="/demo2" className={({ isActive }) => (isActive ? 'active' : '')}>
          Demo2
        </NavLink>
      </button> 
      */}
      </div>
    </nav>
  );
}

export default NavBar;
