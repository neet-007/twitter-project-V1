import React from 'react'
import PageTopBar from '../../../components/UI/PageTopBar'
import ProfileInfo from '../../../components/ProfileInfo'
import PostCard from '../../../components/PostCard'
import MobileSideNav from '../../../components/mobile/MobileSideNav'
function Profile() {
  return (
    <div>
        <PageTopBar/>
        <ProfileInfo/>
        <PostCard/>
        <MobileSideNav/>
    </div>
  )
}

export default Profile