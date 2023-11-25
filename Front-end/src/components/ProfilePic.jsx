import React from 'react'

function ProfilePic({isMobileNav, isHome}) {
  return (
    <img src="src/assets/profile-pic.png" alt="profile-pic"
     className={`profile-pic-comp
     ${isHome ? 'profile-pic-post-grid': ''}`}
     />
  )
}

export default ProfilePic

//{isMobileNav?onclick=showMobileSideNav}