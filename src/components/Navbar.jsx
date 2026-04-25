import React, { useState } from 'react'
import './Navbar'
function Navbar() {
  const[showMenu,setShowMenu] = useState(false);
  const handleToggle = ()=>{
    setShowMenu(!showMenu);  
  }
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${showMenu ? 'show': ""}`} id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled">About</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="bi bi-person"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled">About</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
  )
}

export default Navbar
