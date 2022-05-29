import React from 'react'
import { NavLink } from 'react-router-dom'
import './componentsCss/Navbar.css'
export default function Navbar() {
  return (
    <nav id="navigation">
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/community">Community</NavLink></li>
            <li><NavLink to="/projects" className="purple">Projects</NavLink></li>
            
        </ul>
        <ul>
            <li><NavLink to="/signup" className="purple">Signup</NavLink></li>
            <li><NavLink to="/login" className="purple">Login</NavLink></li>
        </ul>
    </nav>
  )
}
