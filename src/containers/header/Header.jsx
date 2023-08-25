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
          <li><a href="#" aria-label='feature-link'>Features</a></li>
          <li><a href="#" aria-label='team-link'>Team</a></li>
          <li><a href="#" aria-label='signin-link'>Sign in</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;