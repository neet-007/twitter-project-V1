import React, {useState} from 'react'
import ProfilePic from './ProfilePic'
import IconButton from './UI/IconButton'
import TwitterButton from './UI/TwitterButton'
import ProfileCard from './ProfileCard'
import { useFollow, useUnFollow, useGetUserProfile } from '../data/queriesAndMutations'
import CSRFToken from '../data/CSRFToken'
import { useUserContetx } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function ProfileInfo({userProfileId}) {
  console.log(userProfileId)
  const [buttonName, setButtonName] = useState('Follow')
  const {data, isError} = useGetUserProfile(userProfileId)

  const {mutateAsync:follow} = useFollow()
  const {mutateAsync:unFollow} = useUnFollow()

  const {user} = useUserContetx()

  const navigate = useNavigate()

  if (!data) return (null)
  return (
    <section>
        <CSRFToken/>
        <div className="info-header-pic-buttons">
            <img src="/src/assets/header.png" alt="" className='info-header' />
            <ProfilePic isProfilePage={true} profilePic={data.profilePic}/>
            <div className="info-buttons">
                <IconButton Name={'select'}/>
                <IconButton Name={'message'}/>
                <TwitterButton Name={user.id !== data.id ? buttonName: 'Set profile'}color={'black'} onClick={() => {user.id === data.id ? navigate('/create-profile') : buttonName === 'Follow' ? setButtonName('Unfollow')
                                                                                : setButtonName('Follow'); unFollow(userProfileId)}}/>
            </div>
        </div>
        <ProfileCard className={'p-1 one-column-profile-card'} profileInfo={true} username={data.username} mention={data.mention} followingCount={data.followingCount}
                     followersCount={data.followersCount} profilePic={data.profile_pic} bio={data.bio}/>
    </section>
  )
}

export default ProfileInfo