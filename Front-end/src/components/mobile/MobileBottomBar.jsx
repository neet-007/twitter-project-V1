import React from 'react'
import {HouseDoorFill, Search, Bell, Envelope} from 'react-bootstrap-icons'
function MobileBottomBar() {
  return (
    <div className='mobile-bottom-bar'>
        <HouseDoorFill size={30}/>
        <Search size={30}/>
        <Bell size={30}/>
        <Envelope size={30}/>
    </div>
  )
}

export default MobileBottomBar