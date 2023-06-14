import React from 'react'
import {Link} from 'react-router-dom'
import {CgLock} from 'react-icons/cg'
import {FiMenu} from 'react-icons/fi'

import './index.css'

const Header = () => {
  return (
    <nav className='nav-bar-medium'>
        <div className='nav-bar-sub-one'>
            <CgLock className='nav-bar-icon' />
            <Link to="/" className='profile-name-link'>
              <h4 className='nav-bar-profile-name'>_chandanswamy_</h4>
            </Link>
        </div>
        <button type='button' className='nav-bar-menu-button' >
            <FiMenu className='nav-bar-icon' />
        </button>
    </nav>
  )
}

export default Header