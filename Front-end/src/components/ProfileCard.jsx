import React from 'react'
import { PatchCheck, ThreeDots } from 'react-bootstrap-icons'
import IconHoverEffect from './UI/IconHoverEffect'

function ProfileCard({className, isVerified=true, isMobileSideNav=true, pageTopBar, profilePageTopBar ,profileInfo=false}) {
  return (
    <div className={className}>
        <span>Username {isVerified ? <PatchCheck/>:''}</span>
        {!profilePageTopBar ?
          <span className='profile-card-mention'>@Username</span>:''
        }
        {
            !isMobileSideNav || !pageTopBar || !profileInfo ? <><span>Nov14</span>
            <IconHoverEffect className={'profile-card-select'}>
                <ThreeDots/>
            </IconHoverEffect>
        </> : ''}
        {
            isMobileSideNav ? <div>
                                {pageTopBar || profileInfo?
                                <span>40.0k Posts</span>:''
                                }
                                {!pageTopBar || profileInfo?
                                <>
                                <span>1 Following</span>
                                <span>1 Followers</span>
                                </>:''
                                }
                              </div>
                            :''
        }
    </div>
  )
}

export default ProfileCard