import React, { Component } from 'react'
import { RotatingLines } from 'react-loader-spinner'

import ProjectCard from '.'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

export class Projects extends Component {
  state = {apiStatus: apiStatusConstants.initial, projectsList: []}

  componentDidMount(){
    this.getProjects()
  }

  getProjects = async() => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    try {
      const apiUrl = "https://gcs-deploy-node.onrender.com/projects"
    const options = {
      method: 'GET'
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.map(project => ({
        projectId: project.project_id,
        projectTitle: project.project_title,
        projectCode: project.project_code,
        projectDemo: project.project_demo
      }))
      this.setState({projectsList: updatedData, apiStatus: apiStatusConstants.success})
    } else {
      throw new Error('Failed to fetch projects');
    }
      
    } catch (error) {
      console.error(error);
    this.setState({ apiStatus: apiStatusConstants.failure });
    }


    
  }

  renderLoadingView = () => (
    <div className='react-loader-spinner-container'>
      <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="56"
      visible={true}
    />
    </div>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state
    
    return(
      <ul>
        {projectsList.map(eachProject => (
          <ProjectCard key={eachProject.projectId} projectDetails={eachProject} />
        ))}
      </ul>
    )
  }

  renderProjectsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()    
      default:
        return null;
    }
  }

  renderFailureView = () => (
    <div className="error-view">
      <p>Failed to fetch projects. Please try again later.</p>
    </div>
  );

  render() {
    return (
      <div className='project-section'>
        {this.renderProjectsView()}
      </div>
    )
  }
}

export default Projects