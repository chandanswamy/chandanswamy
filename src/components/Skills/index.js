import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {IoLogoPython} from 'react-icons/io'

import {IoLogoJavascript} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {FaNodeJs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiSqlite} from 'react-icons/si'


import './index.css'

const Skills = () => {

  return (
    <div className='skills-section'>
        <div className='each-skill-card'>
            <Link to="PEVHLMTRXV.pdf" target='_blank' className='skill-icon-link'>
                <AiOutlineHtml5 className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>HTML5</p>
        </div>
        <div className='each-skill-card'>
            <Link to="IINZYRFELJ.pdf" target='_blank' className='skill-icon-link'>
                <FaCss3Alt className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>CSS</p>
        </div>
        <div className='each-skill-card'>
            <Link to="OIBEOOEABU.pdf" target='_blank' className='skill-icon-link'>
                <FaBootstrap className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>Bootstrap</p>
        </div>
        <div className='each-skill-card'>
            <Link to="VWXIZWMCNY.pdf" target='_blank' className='skill-icon-link'>
                <IoLogoPython className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>Python</p>
        </div>
        <div className='each-skill-card'>
            <Link to="XRJCVWWMQV.pdf" target='_blank' className='skill-icon-link'>
                <IoLogoJavascript className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>JavaScript</p>
        </div>
        <div className='each-skill-card'>
            <Link to="UEUIXIUHDA.pdf" target='_blank' className='skill-icon-link'>
                <BsGithub className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>Git/Linux</p>
        </div>
        <div className='each-skill-card'>
            <Link to="SNCQMPBYZJ.pdf" target='_blank' className='skill-icon-link'>
                <FaNodeJs className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>Node.js</p>
        </div>
        <div className='each-skill-card'>
            <Link to="PEVHLMTRXV.pdf" target='_blank' className='skill-icon-link'>
                <FaReact className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>React.js</p>
        </div>
        <div className='each-skill-card'>
            <Link to="RXCTRLMHUK.pdf" target='_blank' className='skill-icon-link'>
                <SiSqlite className='skill-icon' />
            </Link>
            <p className='skill-icon-desc'>SQL</p>
        </div>
    </div>
  )
}

export default Skills