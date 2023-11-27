import React, { useState } from 'react'
import SwitchButton from '../../components/UI/SwitchButton'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import PostCard from '../../components/PostCard'
import MobileSideNav from '../../components/mobile/MobileSideNav'
import TwitterButton from '../../components/UI/TwitterButton'
import PostForm from '../../components/PostForm'
import PostModal from '../../components/mobile/PostModal'
import MobilePostButton from '../../components/mobile/MobilePostButton'
import MobileTopBar from '../../components/mobile/MobileTopBar'
import MobileBottomBar from '../../components/mobile/MobileBottomBar'
function Home() {
  const TABS = ['Recent', 'Following']
  const [selectedTab, setSelectedTab] = useState('Recent')
  return (
    <>
      <MobileTopBar/>
      <SwitchButtonContainer>
        {TABS.map(tab => {
          return <SwitchButton key={tab} Name={tab} Selected={selectedTab}
          setSelectedTab={setSelectedTab}/>
        })}
      </SwitchButtonContainer>
      <div className="home-container">
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
      <MobileBottomBar/>
    </>
  )
}

export default Home