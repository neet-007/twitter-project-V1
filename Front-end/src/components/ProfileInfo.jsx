import React, {useState} from 'react'
import ProfilePic from './ProfilePic'
import IconButton from './UI/IconButton'
import TwitterButton from './UI/TwitterButton'
import ProfileCard from './ProfileCard'
import { useFollow, useUnFollow } from '../data/queriesAndMutations'
import CSRFToken from '../data/CSRFToken'
function ProfileInfo({userProfileId}) {
  console.log(userProfileId)
  const [buttonName, setButtonName] = useState('Follow')
  const {mutateAsync:follow} = useFollow()
  const {mutateAsync:unFollow} = useUnFollow()
  return (
    <section>
        <CSRFToken/>
        <div className="info-header-pic-buttons">
            <img src="src/assets/header.png" alt="" className='info-header' />
            <ProfilePic isProfilePage={true}/>
            <div className="info-buttons">
                <IconButton Name={'select'}/>
                <IconButton Name={'message'}/>
                <TwitterButton Name={buttonName}color={'black'} onClick={() => {buttonName === 'Follow' ? setButtonName('Unfollow')
                                                                                : setButtonName('Follow'); unFollow(userProfileId)}}/>
            </div>
        </div>
        <ProfileCard className={'p-1 one-column-profile-card'} profileInfo={true}/>
    </section>
  )
}

export default ProfileInfo