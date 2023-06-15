import React, { Component } from 'react'

import ProjectCard from '.'

import './index.css'

const initalProjectsList = [
{
"project_id": 1,
"project_title": "Coin Toss Game",
"project_code": "https://github.com/chandanswamy/simple-coin-toss",
"project_demo": "https://cscointossgame.ccbp.tech/"
},
{
"project_id": 2,
"project_title": "Comments App",
"project_code": "https://github.com/chandanswamy/comments-app",
"project_demo": "https://commentsappcs.ccbp.tech/"
},
{
"project_id": 3,
"project_title": "Appointment App",
"project_code": "https://github.com/chandanswamy/appointments-app",
"project_demo": "https://apptmate.ccbp.tech/"
},
{
"project_id": 4,
"project_title": "Password Manager",
"project_code": "https://github.com/chandanswamy/PasswordManager",
"project_demo": "https://passwordcs.ccbp.tech/"
},
{
"project_id": 5,
"project_title": "Money Manager App",
"project_code": "https://github.com/chandanswamy/money-manager",
"project_demo": "https://moneymanagercs.ccbp.tech/"
},
{
"project_id": 6,
"project_title": "Emoji Game",
"project_code": "https://github.com/chandanswamy/emojigame",
"project_demo": "https://emojigamecs.ccbp.tech/"
},
{
"project_id": 7,
"project_title": "IPL Dashboard",
"project_code": "https://github.com/chandanswamy/ipl-dashboard",
"project_demo": "https://iplcricinfocs.ccbp.tech/"
}
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Projects extends Component {
  state = {apiStatus: apiStatusConstants.initial, projectsList: initalProjectsList}

  renderProjectsView = () => {
    const {projectsList} = this.state
    
    return(
      <ul>
        {projectsList.map(eachProject => (
          <ProjectCard key={eachProject.projectId} projectDetails={eachProject} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className='project-section'>
        {this.renderProjectsView()}
      </div>
    )
  }
}

export default Projects