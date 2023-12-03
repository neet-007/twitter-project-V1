import React from 'react'
import ProfilePic from './ProfilePic'
import TwitterButton from './UI/TwitterButton'
import { ThreeDots } from 'react-bootstrap-icons'

function AdjustedProfileCard({username, mention, isVerified, className, isSideNav}) {
  return (
    <div className='adjusted-profile-card'>
        <ProfilePic/>
        <div className='adjusted-profile-card-names'>
            <span>{username}</span>
            <span>@{mention}</span>
        </div>
        {isSideNav == true ? <ThreeDots size={20} className='ms-auto'/> :
          <TwitterButton Name='Follow' color={'black'} className={'adjusted-profile-card-button'}/>
        }
    </div>
  )
}

export default AdjustedProfileCard