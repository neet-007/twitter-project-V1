import React from 'react'
import {HouseDoorFill, Search, Bell, Envelope} from 'react-bootstrap-icons'
import MobilePostButton from './MobilePostButton'
import { Link, useNavigate } from 'react-router-dom'
import { isDesktop } from '../../Constants/Constatns'

function MobileBottomBar() {

  const navigate = useNavigate()
  return (
    <div className='mobile-bottom-bar-container hide-desktop'>
      <MobilePostButton handleClick={()=>navigate('/post')}/>
      <div className='mobile-bottom-bar'>
        <Link to='/'>
        <HouseDoorFill size={30}/>
        </Link>
        <Link to='/search'>
        <Search size={30}/>
        </Link>
        <Link to='/notifications'>
        <Bell size={30}/>
        </Link>
        <Link to='/soon'>
        <Envelope size={30}/>
        </Link>
    </div>
    </div>
  )
}

export default MobileBottomBar