import React from 'react'
import ProfilePic from '../ProfilePic'
import {Twitter, Gear} from 'react-bootstrap-icons'
import SearchBar from '../UI/SearchBar'
import { isDesktop } from '../../Constants/Constatns'
function MobileTopBar({middleSection='home',}) {

  return (
    <header className={`mobile-top-bar hide-desktop`}>
        {isDesktop ? '' : <ProfilePic isMobileTopBar={true}/>}
        {middleSection == 'home'? <Twitter size={30}/>
        : middleSection == 'search'? <SearchBar/>
        : middleSection == 'notifacation'? <h3>Notifaction</h3>
        : middleSection == 'messages'? <h3>Messages</h3>
        :''}
        <Gear size={30}/>
    </header>
  )
}

export default MobileTopBar