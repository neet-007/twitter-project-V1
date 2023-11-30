import React from 'react'
import ProfilePic from '../ProfilePic'
import ProfileCard from '../ProfileCard'
import { PlusCircle } from 'react-bootstrap-icons'
import NavBarItem from '../UI/NavBarItem'
import { SIDE_NAV_ROUTS } from '../../Constants/Constatns'
import { useNavigate } from 'react-router-dom'
function MobileSideNav({mobileSideNavON, setMobileSideNavON}) {
  //const SIDE_NAV_ITEMS = ['Person','Twitter','Lists','Bookmarks','Communities','Monetization']
  const navigate = useNavigate()
  return (
    <div className={`mobile-side-nav ${mobileSideNavON ?'show':'hide'}`}>
        <div className="mobile-side-nav-first-row">
            <ProfilePic mobileSideNavToProfile={navigate}/>
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