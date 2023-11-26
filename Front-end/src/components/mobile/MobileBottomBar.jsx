import React from 'react'
import {HouseDoorFill, Search, Bell, Envelope} from 'react-bootstrap-icons'
import MobilePostButton from './MobilePostButton'
function MobileBottomBar() {
  return (
    <div className='mobile-bottom-bar-container'>
      <MobilePostButton/>
      <div className='mobile-bottom-bar'>
        <HouseDoorFill size={30}/>
        <Search size={30}/>
        <Bell size={30}/>
        <Envelope size={30}/>
    </div>
    </div>
  )
}

export default MobileBottomBar