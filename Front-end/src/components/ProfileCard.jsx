import React from 'react'
import { PatchCheck, ThreeDots } from 'react-bootstrap-icons'
import IconHoverEffect from './UI/IconHoverEffect'

function ProfileCard({className, isVerified=true}) {
  return (
    <div className={className}>
        <span>Username</span>
        {isVerified ? <PatchCheck/>:''}
        <span className='profile-card-mention'>@Username</span>
        <span>Nov14</span>
        <IconHoverEffect className={'profile-card-select'}>
            <ThreeDots/>
        </IconHoverEffect>
    </div>
  )
}

export default ProfileCard