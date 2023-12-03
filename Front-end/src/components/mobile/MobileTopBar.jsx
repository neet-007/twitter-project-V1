import React from 'react'
import ProfilePic from '../ProfilePic'
import {Twitter, Gear} from 'react-bootstrap-icons'
import SearchBar from '../UI/SearchBar'
function MobileTopBar({middleSection='home', mobileSideNavON, setMobileSideNavOn}) {
  const isDesktop = window.matchMedia('(min-width: 610px)').matches
  return (
    <header className='mobile-top-bar'>
        {isDesktop ? '' : <ProfilePic mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn} isMobileTopBar={true}/>}
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