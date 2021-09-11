import React, { useState, useEffect } from 'react';
import { Buttontwo } from './Buttontwo';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Word 'a Mouth' <img src="images/wam.jpg" alt="logo" width="45" height="45"></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/places'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Restaurants
              </Link>
            </li>

            <li>
              <Link
                to='/signin'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
          </ul>
          {button && <Buttontwo buttonStyle='btn2--outline'>Sign in</Buttontwo>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
