import React from 'react'
import { NavLink } from 'react-router-dom'
import './componentsCss/Navbar.css'
export default function Navbar() {
  return (
    <nav id="navigation">
        <ul>
            <li><NavLink exact to={process.env.PUBLIC_URL + '/'}>Home</NavLink></li>
            <li><NavLink to={process.env.PUBLIC_URL + '/contact'}>Contact</NavLink></li>
            <li><NavLink to={process.env.PUBLIC_URL + '/community'}>Community</NavLink></li>
            <li><NavLink to={process.env.PUBLIC_URL + '/projects'} className="purple">Projects</NavLink></li>
            
        </ul>
        <ul>
            <li><NavLink to={process.env.PUBLIC_URL + '/signup'} className="purple">Signup</NavLink></li>
            <li><NavLink to={process.env.PUBLIC_URL + '/login'} className="purple">Login</NavLink></li>
        </ul>
    </nav>
  )
}
