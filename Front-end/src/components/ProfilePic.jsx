import React from 'react'
import { useUserContetx } from '../context/AuthContext';
function ProfilePic({isMobileNav, isHome, isProfilePage, mobileSideNavON, setMobileSideNavOn, postCardToProfile, mobileSideNavToProfile, isMobileTopBar=false, userId}) {
  const {user} = useUserContetx()
  return (
    <img src="src/assets/profile-pic.png" alt="profile-pic"
     className={`profile-pic-comp
     ${isHome ? 'profile-pic-post-grid': ''}
     ${isProfilePage ? 'profile-page-profile-pic' : 'normal-profile-pic'}`}
     onClick={()=>{isMobileTopBar==true && setMobileSideNavOn(!mobileSideNavON);
                   postCardToProfile && postCardToProfile(`/profile/${userId}`);
                   mobileSideNavToProfile && mobileSideNavToProfile(`/profile/${user.id}`)}}/>
  )
}

export default ProfilePic

//{isMobileNav?onclick=showMobileSideNav}