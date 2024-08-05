import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 710) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className="navbarMain">
        <Link to="/" className='logoImage'>
          <img src="https://img.icons8.com/?size=100&id=LB9jiNoZermj&format=png&color=000000" alt="Logo" className='picLogo' />
        </Link>

        {menuOpen ? (
          <img 
            src="https://img.icons8.com/?size=100&id=9433&format=png&color=000000" 
            onClick={toggleMenu} 
            alt="Close Menu" 
            className='crossMenu' 
          />
        ) : (
          <svg className='hamMenu' onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        )}

        <div className={`navbarElements ${menuOpen ? 'showMenu' : 'hideMenu'}`}>
          <ul>
            <Link to="/" className='navbarListElements'><span>Home</span></Link>
            <Link to="/registration" className='navbarListElements'><span>Donate</span></Link>
            <Link to="/bloodfind" className='navbarListElements'><span>Find Blood</span></Link>
            <Link to="/login" className='navbarListElements'><span>Login</span></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
