import React from 'react'

function ProfilePic({isMobileNav, isHome, isProfilePage, mobileSideNavON, setMobileSideNavOn}) {
  return (
    <img src="src/assets/profile-pic.png" alt="profile-pic"
     className={`profile-pic-comp
     ${isHome ? 'profile-pic-post-grid': ''}
     ${isProfilePage ? 'profile-page-profile-pic' : 'normal-profile-pic'}`}
     onClick={()=>{setMobileSideNavOn && setMobileSideNavOn(!mobileSideNavON)}}/>
  )
}

export default ProfilePic

//{isMobileNav?onclick=showMobileSideNav}