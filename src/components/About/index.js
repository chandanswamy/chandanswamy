import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const About = () => {
  return (
    <div className='about-route'>
      <div className='box-container'>
        <Link to="/about/experience" className='box-link'>
          <div className='experience'>
            <p className='letter'>E</p>
            <p className='letter'>X</p>
            <p className='letter'>P</p>
            <p className='letter'>E</p>
            <p className='letter'>R</p>
            <p className='letter'>I</p>
            <p className='letter'>E</p>
            <p className='letter'>N</p>
            <p className='letter'>C</p>
            <p className='letter'>E</p>
          </div>
        </Link>
        <Link to="/about/education" className='box-link'>
          <div className='education'>
            <p className='letter'>E</p>
            <p className='letter'>D</p>
            <p className='letter'>U</p>
            <p className='letter'>C</p>
            <p className='letter'>A</p>
            <p className='letter'>T</p>
            <p className='letter'>I</p>
            <p className='letter'>O</p>
            <p className='letter'>N</p>
          </div>
        </Link>        
      </div>      
      <div className='about'>
        <p>
          DURING MY TIME AT NXT-WAVE, I HAD THE OPPORTUNITY TO LEARN AND WORK ON VARIOUS WEB DEVELOPMENT PROJECTS, WHERE I GAINED EXPERIENCE IN FRONT-END AND BACK-END DEVELOPMENT, ALONG WITH PROFICIENCY IN LANGUAGES LIKE HTML, CSS, JAVASCRIPT, PYTHON AND REACTJS. I ALWAYS STRIVE TO LEARN NEW THINGS AND EXPLORE DIFFERENT TECHNOLOGIES TO IMPROVE MY SKILLS.
        </p>
        <p>
          AS A WEB DEVELOPER, I LOVE TO CREATE RESPONSIVE AND USER-FRIENDLY WEBSITES THAT MEET MY CLIENTS' NEEDS. I BELIEVE IN A COLLABORATIVE APPROACH WHERE I WORK CLOSELY WITH MY CLIENTS TO UNDERSTAND THEIR REQUIREMENTS AND DELIVER HIGH-QUALITY RESULTS. I AM PASSIONATE ABOUT WEB DEVELOPMENT AND ALWAYS TRY TO KEEP MYSELF UPDATED WITH THE LATEST TRENDS AND BEST PRACTICES.
        </p>
        <p>
          THANK YOU FOR VISITING MY PORTFOLIO WEBSITE. IF YOU HAVE ANY QUESTIONS OR WOULD LIKE TO DISCUSS A POTENTIAL PROJECT, PLEASE DON'T HESITATE TO CONTACT ME. I WOULD LOVE TO HEAR FROM YOU!
        </p>
      </div>
      
    </div>
  )
}

export default About