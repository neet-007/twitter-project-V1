import React, { useState } from 'react'
import SwitchButton from '../../components/UI/SwitchButton'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import PostCard from '../../components/PostCard'
function Home() {
  const TABS = ['Recent', 'Following']
  const [selectedTab, setSelectedTab] = useState('Recent')
  return (
    <>
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
        <PostCard/>
      </div>
    </>
  )
}

export default Home