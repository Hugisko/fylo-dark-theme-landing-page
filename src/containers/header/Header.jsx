import React from 'react'
import logo from '../../assets/logo.svg';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className='header__nav'>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Sign in</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;