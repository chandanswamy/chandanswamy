import React, { Component } from 'react'
import {SiAboutdotme} from 'react-icons/si'
import {BsJournalCode} from 'react-icons/bs'
import {BsChatText} from 'react-icons/bs'

import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import RouteIconItem from '../RouteIconItem'

import './index.css'

const routeNavbarList = [
    {id: 1, iconName: SiAboutdotme, tabName: 'ABOUT',},
    {id: 2, iconName: BsJournalCode, tabName: 'PROJECTS',},
    {id: 3, iconName: BsChatText, tabName: 'CONTACT',}
]

class RoutesNavbar extends Component {
    state = {activeRoute:routeNavbarList[1].tabName,  routeNavbarIconsList: routeNavbarList}

    onClickTabRoute = (id) => {
        const {routeNavbarIconsList} = this.state
        const activeRouteObj = routeNavbarIconsList.find((eachItem) => eachItem.id === id);    
        if(activeRouteObj){
            this.setState({activeRoute: activeRouteObj.tabName})
        }
    }

    renderPortfolioDetails = () => {
        const {activeRoute} = this.state

        switch (activeRoute) {
            case "ABOUT":
                return <About />
            case "PROJECTS":
                return <Projects />
            case "CONTACT":
                return <Contact />        
            default:
                return null
        }
    }

  render() {
    const {activeRoute, routeNavbarIconsList} = this.state
    console.log(activeRoute)

    return (
        <>
        <ul className='routes-navbar'>
            {routeNavbarIconsList.map(eachItem => (
                <RouteIconItem key={eachItem.id} iconDetails={eachItem} onClickTabRoute={this.onClickTabRoute} isTabActive={activeRoute} />
            ))}
        </ul>
        {this.renderPortfolioDetails()}
        </>
    )
  }
}

export default RoutesNavbar