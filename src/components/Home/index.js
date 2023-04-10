import React from 'react'
import './index.css'

const Home = () => {
  return (
    <div className='home-route'>        
        <div className='home-content'>
            <img src="https://res.cloudinary.com/chandanswamy/image/upload/v1681125785/Web-development_-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-on-transparent-background-PNG_tzo2zt.png" 
            alt="home wallpaper"
            className='home-wallpaper' />
            <div className='self-content'>
                <h1 className='greeting-myself'>Hi, I'm Chandan Swamy Ganuga.</h1>
                <p className='content-myself'>
                    An aspiring full stack developer on a 
                </p>
                <p className='content-myself'>mission to turn innovative ideas into</p>
                <p className='content-myself'>digital realities. With a passion for</p>
                <p className='content-myself'>problem-solving and an eye for design,</p>
                <p className='content-myself'>I approache each project with a</p>
                <p className='content-myself'>unique perspective, combining technical</p>
                <p className='content-myself'>expertise with creative flair</p>
                <p className='content-myself'>to deliver top-notch results.</p>
            </div>
        </div>
    </div>
  )
}

export default Home