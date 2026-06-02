import React, { useState } from 'react'
import { Link } from 'react-router';
import {CartContext}from '../App'
import { useContext } from 'react';

import './Navbar'
function Navbar() {
  const{Cart,setCart} = useContext(CartContext)
 

  const[showMenu,setShowMenu] = useState(false);
  const handleToggle = ()=>{
    setShowMenu(!showMenu);  
  }
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${showMenu ? 'show': ""}`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="">Services</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/loginpage"><i className="bi bi-person"></i></Link>
        </li>
        <li className="nav-item">
      <Link className="nav-link" to="/cardpage"><i className="bi bi-bag-check"> </i>{Cart.length}</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link">About</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
  )
}

export default Navbar
