import React, {useState} from 'react'
import PageTopBar from '../../components/UI/PageTopBar'
import ProfileInfo from '../../components/ProfileInfo'
import PostCard from '../../components/PostCard'
import SwitchButton from '../../components/UI/SwitchButton'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
function Profile() {
  const PROFILE_TABS = ['Profile','Repiles','Media','Likes']
  const [selectedTab, setSelectedTab] = useState('Profile')
  return (
    <div>
        <PageTopBar/>
        <ProfileInfo/>
        <SwitchButtonContainer>
          {PROFILE_TABS.map(tab => {
            return <SwitchButton Name={tab} Selected={selectedTab} setSelectedTab={() => setSelectedTab(tab)}/>
          })}
        </SwitchButtonContainer>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
  )
}

export default Profile