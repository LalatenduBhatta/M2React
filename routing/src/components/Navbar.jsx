import React from 'react'
import "../css/Navbar.css"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="logo192.png" alt="logo" />
                </div>
                <div className="nav-links">
                    <Link to="/" className='links'> <li>HOME</li></Link>
                    <Link to="/about" className='links'><li>ABOUT</li></Link>
                    <Link to="/contact" className='links'><li>CONTACT</li></Link>
                    <NavLink to="/courses" className='links'><li>COURSES</li></NavLink>
                </div>
                <div className="login">
                    <Link to="/login" className='links'><button>LOGIN</button></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar