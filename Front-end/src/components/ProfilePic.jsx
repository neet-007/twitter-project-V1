import React from 'react'

function ProfilePic({isMobileNav, isHome, isProfilePage, mobileSideNavON, setMobileSideNavOn, postCardToProfile, mobileSideNavToProfile, isMobileTopBar=false}) {
  return (
    <img src="src/assets/profile-pic.png" alt="profile-pic"
     className={`profile-pic-comp
     ${isHome ? 'profile-pic-post-grid': ''}
     ${isProfilePage ? 'profile-page-profile-pic' : 'normal-profile-pic'}`}
     onClick={()=>{isMobileTopBar==true && setMobileSideNavOn(!mobileSideNavON);
                   postCardToProfile && postCardToProfile('/profile');
                   mobileSideNavToProfile && mobileSideNavToProfile('/profile')}}/>
  )
}

export default ProfilePic

//{isMobileNav?onclick=showMobileSideNav}