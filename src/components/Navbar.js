import React from 'react';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    Programming
                </li>
                <li className='nav-item'>
                    Music
                </li>
                <li className='nav-item'>
                    Sound Design
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;