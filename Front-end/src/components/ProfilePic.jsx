import React from 'react'
import { useUserContetx } from '../context/AuthContext';
import { useAtom } from 'jotai';
import { mobileSideNavOnAtom } from '../lib/jotai/atoms';
function ProfilePic({isMobileNav, isHome, isProfilePage, postCardToProfile, mobileSideNavToProfile, isMobileTopBar=false, userId}) {

  const {user} = useUserContetx()
  const [mobileSideNavON, setMobileSideNavOn] = useAtom(mobileSideNavOnAtom)
  return (
    <img src="/src/assets/profile-pic.png" alt="profile-pic"
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