import React from 'react'
import {Link} from 'react-router-dom'

import {AiOutlineHome} from 'react-icons/ai'
import {BsFillGridFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {BsBraces} from 'react-icons/bs'
import {BsCaretRightFill} from 'react-icons/bs'


import './index.css'

const Header = () => {

  return (
    <nav className='nav-bar'>
        <div className='nav-bar-desktop'>
            <img src="https://res.cloudinary.com/chandanswamy/image/upload/v1652018016/logo_wmtkti.jpg" alt="chandan swamy"  className='profile-photo'/>
            <h1 className='profile-name'>ChandanSwamy
                <BsBraces />
            </h1>
            <ul className='nav-desktop-menu'>
                <Link className='nav-link' to="/">
                    <li className='nav-menu-item'>
                        Home
                        <BsCaretRightFill />                                        
                    </li>
                </Link>
                <Link className='nav-link' to="/projects">
                    <li className='nav-menu-item'>
                        Projects<BsCaretRightFill />                
                    </li>
                </Link>
                <Link className='nav-link' to="/about">
                    <li className='nav-menu-item'>
                        About<BsCaretRightFill />    
                    </li>
                </Link>
                <Link className='nav-link' to="/contact">
                    <li className='nav-menu-item'>
                        Contact<BsCaretRightFill />                  
                    </li>
                </Link>
            </ul>
            
        </div>
        <ul className='nav-mobile-menu'>
            <Link className='nav-link' to="/">
                <li className='nav-menu-item'>
                    <AiOutlineHome className='menu-icon' />
                    <span className='span-text'>Home</span>                  
                </li>
            </Link>
            <Link className='nav-link' to="/projects">
                <li className='nav-menu-item'>
                    <BsFillGridFill className='menu-icon' />
                    <span className='span-text'>Projects</span>                
                </li>
            </Link>
            <Link className='nav-link' to="/about">
                <li className='nav-menu-item'>
                    <CgProfile className='menu-icon' />
                    <span className='span-text'>About</span>
                </li>
            </Link>
            <Link className='nav-link' to="/contact">
                <li className='nav-menu-item'>
                    <BsFillPersonLinesFill className='menu-icon' />
                    <span className='span-text'>Contact</span>                
                </li>
            </Link>                
        </ul>
    </nav>
  )
}

export default Header