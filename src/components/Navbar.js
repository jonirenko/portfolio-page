import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/webdevelopement' className='nav-link'>
                        Web Developement
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/music' className='nav-link'>
                        Music
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;