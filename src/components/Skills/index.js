import React from 'react'
import { Link } from 'react-router-dom'

import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {BsGit} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'

import './index.css'

const Skills = () => {
  return (
    <div>
        <h1 className='skills-heading'>-----Skills-----</h1>
    <div className='skills-section'>
        <Link className='skill-icon-link' to="./PEVHLMTRXV.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <FaHtml5 className='skill-icon'/>
        </div >
        </Link>
        <Link className='skill-icon-link' to="./IINZYRFELJ.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <FaCss3Alt className='skill-icon'/>
        </div>
        </Link>
        <Link className='skill-icon-link' to="./RXCTRLMHUK.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <SiMysql className='skill-icon'/>
        </div>
        </Link>
        <Link className='skill-icon-link' to="./VWXIZWMCNY.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <FaPython className='skill-icon'/>
        </div>
        </Link>
        <Link className='skill-icon-link' to="./GVQJKGYIFV.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <IoLogoJavascript className='skill-icon'/>
        </div>
        </Link>
        <Link className='skill-icon-link' to="./OIBEOOEABU.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <FaBootstrap className='skill-icon'/>
        </div>
        </Link>
        <Link className='skill-icon-link' to="./UEUIXIUHDA.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <BsGit className='skill-icon'/>
        </div>
        </Link>
        <Link className='skill-icon-link' to="./UEUIXIUHDA.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <FaGithub className='skill-icon'/>
        </div>
        </Link>
        <Link className='skill-icon-link' >
        <div className='skill-icons-card'> 
            <FaReact className='skill-icon'/>
        </div>
        </Link>
        <Link className='skill-icon-link' to="./SNCQMPBYZJ.pdf" target='_blank'>
        <div className='skill-icons-card'>
            <FaNodeJs className='skill-icon'/>
        </div>
        </Link>
    </div>
    </div>
  )
}

export default Skills