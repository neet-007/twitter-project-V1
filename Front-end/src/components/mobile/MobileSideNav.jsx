import React from 'react'
import ProfilePic from '../ProfilePic'
import ProfileCard from '../ProfileCard'
import { PlusCircle } from 'react-bootstrap-icons'
import NavBarItem from '../UI/NavBarItem'

function MobileSideNav() {
  const SIDE_NAV_ITEMS = ['Person','Twitter','Lists','Bookmarks','Communities','Monetization']
  return (
    <div className='mobile-side-nav'>
        <div className="mobile-side-nav-first-row">
            <ProfilePic/>
            <PlusCircle/>
        </div>
        <ProfileCard className={'mobile-side-nav-profile-card'} isMobileSideNav={true}/>
        <nav className='moblie-side-nav-nav'>
            <ul className='moblie-side-nav-ul'>
                {SIDE_NAV_ITEMS.map(item => {
                    return <NavBarItem item={item}/>
                })}
            </ul>
        </nav>
    </div>
  )
}

export default MobileSideNav