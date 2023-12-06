import React from 'react'
import { SIDE_NAV_ROUTS, SIDE_NAV_ROUTS_BIG } from '../Constants/Constatns'
import NavBarItem from './UI/NavBarItem'
import TwitterButton from './UI/TwitterButton'
import ProfileCard from './ProfileCard'
import ProfilePic from './ProfilePic'
import AdjustedProfileCard from './AdjustedProfileCard'
import { useUserContetx } from '../context/AuthContext'
function SideNavBar() {

  const {user} = useUserContetx()
  return (
    <nav className='side-nav-bar-nav'>
        <ul className='side-nav-bar-ul'>
          {SIDE_NAV_ROUTS_BIG.map(item => {
            return <NavBarItem key={item.item} item={item.item} route={item.route}/>
          })}
        </ul>
        <div className="side-nav-interactions">
          <TwitterButton Name='Post' color={'blue'}/>
          <AdjustedProfileCard username={user.username} mention={user.mention} isSideNav={true}/>
        </div>
    </nav>
  )
}

export default SideNavBar