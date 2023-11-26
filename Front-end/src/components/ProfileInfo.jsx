import React from 'react'
import ProfilePic from './ProfilePic'
import IconButton from './UI/IconButton'
import TwitterButton from './UI/TwitterButton'
import ProfileCard from './ProfileCard'
function ProfileInfo() {
  return (
    <section>
        <div className="info-header-pic-buttons">
            <img src="src/assets/header.png" alt="" className='info-header' />
            <ProfilePic isProfilePage={true}/>
            <div className="info-buttons">
                <IconButton Name={'select'}/>
                <IconButton Name={'message'}/>
                <TwitterButton color={'black'}/>
            </div>
        </div>
        <ProfileCard className={'p-1'}/>
    </section>
  )
}

export default ProfileInfo