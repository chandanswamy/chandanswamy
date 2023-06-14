import React from 'react'
import './index.css'

const RouteIconItem = (props) => {
    const {iconDetails, onClickTabRoute, isTabActive} = props
    const {id, iconName, tabName} = iconDetails
    const activeTabStyling = isTabActive === tabName ? "active-tab" : null

    const IconComponent = iconName
    const onClickTabRouteItem = () => {
        onClickTabRoute(id)
    } 

  return (
    <div className="route-div">
        <button type="button" className= "route-navbar-button about" onClick={onClickTabRouteItem}>
            <IconComponent className={`route-navbar-icon ${activeTabStyling}`} />
        </button>
    </div>
  )
}

export default RouteIconItem