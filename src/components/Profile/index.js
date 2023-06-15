import React, { Component } from 'react'
import Typed from 'typed.js'

import './index.css'
import { Link } from 'react-router-dom';
import Skills from '../Skills';
import RoutesNavbar from '../RoutesNavbar'
import ShareProfile from '../ShareProfile';

class Profile extends Component {

    constructor(props) {
    super(props);
    this.el = React.createRef();
    this.typed = null;
  }

  componentDidMount() {
    this.typed = new Typed(this.el.current, {
      strings: ['FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'FULLSTACK DEVELOPER'],
      typeSpeed: 100,
    });
  }

  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  render() {
    return (
      <div className='profile-route'>
        <div className='profile-section'>
            <div className='profile-section-sub-one'>
                <img src="chandanswamy.png" alt='profile' className='profile-image' />
                <div>
                <h3 className='profile-intro'>Hi, I'm an Aspiring<br></br><span className='profile-intro-span' ref={this.el}> </span></h3>
                </div>
            </div>
            <div className='profile-section-sub-two'>
                <p className='profile-bio'>As a passionate fresher in Web Development,
                    I excel in Frontend and Backend Technologies.
                    Eager to contribute and grow with hands-on experience.
                </p>
            </div>
        </div>
        <div className='resume-portfolio-section'>
            <Link to="/ChandanSwamyGanuga_Resume.pdf" target='_parent' className='resume-portfolio-link'>
                <button className='resume-portfolio-button' type='button' >
                    Resume
                </button>
            </Link>
            <div className='resume-portfolio-link'>
              <ShareProfile />
            </div>
        </div>
        <Skills />
        <RoutesNavbar />
      </div>
    )
  }
}

export default Profile