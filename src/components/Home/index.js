import {React} from 'react'
import Skills from '../Skills'
import './index.css'


const Home = () => {
  return (
    <div className='home-route'>        
        <div className='home-content'>
            <img src="/homepage.png" 
            alt="home wallpaper"
            className='home-wallpaper' />
            <div className='self-content'>
                <h1 className='greeting-myself'>Hi, I'm Chandan Swamy Ganuga.</h1>
                <p className='content-myself'>An aspiring full stack developer on a mission to turn innovative ideas into digital realities. With a passion for problem-solving and an eye for design, I approach each project with a unique perspective, combining technical expertise with creative flair to deliver top-notch results.</p>
            </div>
        </div>
        <Skills />
    </div>
  )
}

export default Home