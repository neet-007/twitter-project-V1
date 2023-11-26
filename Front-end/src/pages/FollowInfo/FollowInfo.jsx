import React, { useState } from 'react'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import SwitchButton from '../../components/UI/SwitchButton'
import PageTopBar from '../../components/UI/PageTopBar'

function FollowInfo() {
  const FOLLOW_TABS = ['Verified Followers', 'Followers', 'Following']
  const [SelectedTab, setSelectedTab] = useState('Verified Followers')
  return (
    <div>
        <PageTopBar/>
        <SwitchButtonContainer>
            {FOLLOW_TABS.map(tab => {
                return <SwitchButton Name={tab} Selected={SelectedTab} setSelectedTab={() => {setSelectedTab(tab)}}/>
            })}
        </SwitchButtonContainer>
    </div>
  )
}

export default FollowInfo