import React, {useState} from 'react'
import PageTopBar from '../../components/UI/PageTopBar'
import ProfileInfo from '../../components/ProfileInfo'
import PostCard from '../../components/PostCard'
import SwitchButton from '../../components/UI/SwitchButton'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import MobileBottomBar from '../../components/mobile/MobileBottomBar'
function Profile() {
  const PROFILE_TABS = ['Profile','Repiles','Media','Likes']
  const [selectedTab, setSelectedTab] = useState('Profile')
  return (
    <>
        <PageTopBar/>
        <ProfileInfo/>
        <SwitchButtonContainer>
          {PROFILE_TABS.map(tab => {
            return <SwitchButton key={tab} Name={tab} Selected={selectedTab} setSelectedTab={() => setSelectedTab(tab)}/>
          })}
        </SwitchButtonContainer>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </>
  )
}

export default Profile