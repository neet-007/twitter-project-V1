import React from 'react'
import { PatchCheck, ThreeDots } from 'react-bootstrap-icons'
import IconHoverEffect from './UI/IconHoverEffect'

function ProfileCard({className, isVerified=true, isMobileSideNav}) {
  return (
    <div className={className}>
        <span>Username {isVerified ? <PatchCheck/>:''}</span>
        <span className='profile-card-mention'>@Username</span>
        {
            !isMobileSideNav ? <><span>Nov14</span>
            <IconHoverEffect className={'profile-card-select'}>
                <ThreeDots/>
            </IconHoverEffect>
        </> : ''}
        {
            isMobileSideNav ? <div>
                                <span>1 Following</span>
                                <span>1 Followers</span>
                              </div>
                            :''
        }
    </div>
  )
}

export default ProfileCard