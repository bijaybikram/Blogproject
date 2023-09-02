import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="logo">
            <a href="#">Logo</a>
        </div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/createblog">Add Blog</a></li>
            {/* <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li> */}
        </ul>
        </nav>
    </div>
  )
}

export default Navbar