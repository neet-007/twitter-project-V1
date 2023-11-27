import React from 'react'
import ProfilePic from '../ProfilePic'
import ProfileCard from '../ProfileCard'
import { PlusCircle } from 'react-bootstrap-icons'
import NavBarItem from '../UI/NavBarItem'
import { SIDE_NAV_ROUTS } from '../../Constants/Constatns'
function MobileSideNav() {
  //const SIDE_NAV_ITEMS = ['Person','Twitter','Lists','Bookmarks','Communities','Monetization']
  return (
    <div className='mobile-side-nav'>
        <div className="mobile-side-nav-first-row">
            <ProfilePic/>
            <PlusCircle/>
        </div>
        <ProfileCard className={'one-column-profile-card'} isMobileSideNav={true}/>
        <nav className='moblie-side-nav-nav'>
            <ul className='moblie-side-nav-ul'>
                {SIDE_NAV_ROUTS.map(route => {
                    return <NavBarItem key={route.item}item={route.item} route={route.route}/>
                })}
            </ul>
        </nav>
    </div>
  )
}

export default MobileSideNav