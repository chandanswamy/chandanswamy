import React from 'react'
import {IoNavigateCircleOutline} from 'react-icons/io'
import {GrCode} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    const {projectDetails} = props
    const {projectId, projectTitle, projectDemo, projectCode} = projectDetails
  return (
    <li>
        <div>
            <h4>{projectTitle}</h4>
        </div>
        <div>
            <Link to={`/${projectDemo}`}>
                <button>
                    <IoNavigateCircleOutline />
                </button>
            </Link>
            <Link to={`/${projectCode}`}>
                <button>
                    <GrCode />
                </button>
            </Link>
        </div>
    </li>
  )
}

export default ProjectCard