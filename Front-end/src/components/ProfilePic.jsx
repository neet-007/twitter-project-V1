import React from 'react'

function ProfilePic({isMobileNav, isHome, isProfilePage}) {
  return (
    <img src="src/assets/profile-pic.png" alt="profile-pic"
     className={`profile-pic-comp
     ${isHome ? 'profile-pic-post-grid': ''}
     ${isProfilePage ? 'profile-page-profile-pic' : 'normal-profile-pic'}`}
     />
  )
}

export default ProfilePic

//{isMobileNav?onclick=showMobileSideNav}