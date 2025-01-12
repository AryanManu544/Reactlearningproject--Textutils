// component file name 1st letter must be capital alwayss
import React from 'react'
import { Link } from 'react-router-dom';
import lightIcon from '../assets/icons/light-icon.ico';
import darkIcon from '../assets/icons/dark-icon.ico';

export default function Navbar(props) {
  return (
    <div>  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        <div className="form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}" style={{ position: 'relative' }}>
              <input 
                className="form-check-input" 
                onClick={props.toggleMode} 
                type="checkbox" 
                role="switch" 
                id="flexSwitchCheckDefault" 
              />
              <img 
                src={props.mode === 'dark' ? darkIcon : lightIcon} 
                alt="theme icon" 
                style={{
                  position: 'absolute', 
                  top: '50%', 
                  left: props.mode === 'dark' ? '75%' : '25%', // Inverse position of the icons
                  transform: 'translate(-65%, -50%)', 
                  width: '20px', 
                  height: '20px',
                  pointerEvents: 'none' // Prevents the icon from interfering with the toggle functionality
                }}
              />
                

</div>
      </div>
    </div>
  </nav>
  </div>
  )
}