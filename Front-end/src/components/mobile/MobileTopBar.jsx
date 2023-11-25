import React from 'react'
import ProfilePic from '../ProfilePic'
import {Twitter, Gear} from 'react-bootstrap-icons'
function MobileTopBar({middleSection='home'}) {
  return (
    <div className='mobile-top-bar'>
        <ProfilePic/>
        {middleSection == 'home'? <Twitter size={30}/>
        : middleSection == 'search'? <h3>Search</h3>
        : middleSection == 'notifacation'? <h3>Notifaction</h3>
        : middleSection == 'messages'? <h3>Messages</h3>
        :''}
        <Gear size={30}/>
    </div>
  )
}

export default MobileTopBar