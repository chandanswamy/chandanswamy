import React from 'react'
import {FiNavigation} from 'react-icons/fi'
import {BsFileEarmarkCode} from 'react-icons/bs'

import './index.css'

const ProjectCard = (props) => {
    const {projectDetails} = props
    const { projectTitle, projectCode, projectDemo, projectDomain, projectDescription, skills, concept} = projectDetails
    const isFrontend = projectDomain === "Frontend" ? true : false

    const onClickDemoButton = () => {
        window.location.href = projectDemo
    }

    const onClickCodeButton = () => {
        window.location.href = projectCode
    }

  return (
    <li className='project-card'>
        <div className='project-title-container'>
            <h4 className='project-title'>{projectTitle}</h4>
            <p className='project-description'>{projectDescription}</p>
        </div>
        <div className='project-details-container'>
            <p className='project-concepts'>{`Concepts : ${concept}`}</p>
            <p className='project-skills'>{`Skills : ${skills}`}</p>
        </div>
        <div className='projects-button-container'>
            {isFrontend && (
                <button type='button' className='project-button' onClick={onClickDemoButton}>
                    <FiNavigation className='project-icon' />
                    <p className='project-button-tag'>Live Demo</p>
                </button>
            )}           
                <button type='button' className='project-button code' onClick={onClickCodeButton}>
                    <BsFileEarmarkCode className='project-icon' />
                    <p className='project-button-tag'>Code</p>
                </button>
            
        </div>
    </li>
  )
}

export default ProjectCard