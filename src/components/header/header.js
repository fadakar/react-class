import React from 'react'
import { NavLink} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
        <nav >
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/tutorials">Tutorials</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header