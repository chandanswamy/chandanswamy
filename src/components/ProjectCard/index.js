import React from 'react'
import {FiNavigation} from 'react-icons/fi'
import {GrCode} from 'react-icons/gr'
import { Link } from 'react-router-dom'

import './index.css'

const ProjectCard = (props) => {
    const {projectDetails} = props
    const {projectTitle, projectDemo, projectCode} = projectDetails
  return (
    <li className='project-card'>
        <div className='project-title-container'>
            <h4 className='project-title'>{projectTitle}</h4>
        </div>
        <div className='projects-button-container'>
            <Link to={`${projectDemo}`} className='project-link'>
                <button type='button' className='project-button'>
                    <FiNavigation className='project-icon' />
                    <p className='project-button-tag'>Live Demo</p>
                </button>
            </Link>
            <Link to={`${projectCode}`} className='project-link'>
                <button type='button' className='project-button'>
                    <GrCode className='project-icon' />
                    <p className='project-button-tag'>Code</p>
                </button>
            </Link>
        </div>
    </li>
  )
}

export default ProjectCard