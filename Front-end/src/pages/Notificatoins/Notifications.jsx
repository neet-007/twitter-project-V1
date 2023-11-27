import React, { useState } from 'react'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import SwitchButton from '../../components/UI/SwitchButton'
import NavBarItem from '../../components/UI/NavBarItem'
import MobileTopBar from '../../components/mobile/MobileTopBar'

function Notifications() {
  const NOTIFICATIONS_TABS = ['All', 'Verified', 'Mentions']
  const [SelectedTab, setSelectedTab] = useState('All')
  return (
    <div>
        <MobileTopBar middleSection='notifacation'/>
        <SwitchButtonContainer>
            {NOTIFICATIONS_TABS.map(tab => {
                return <SwitchButton key={tab} Name={tab} Selected={SelectedTab} setSelectedTab={()=>{setSelectedTab(tab)}}/>
            })}
        </SwitchButtonContainer>
        <NavBarItem item={'Notifications'}/>
        <NavBarItem item={'Notifications'}/>
        <NavBarItem item={'Notifications'}/>
        <NavBarItem item={'Notifications'}/>
        <NavBarItem item={'Notifications'}/>
    </div>
  )
}

export default Notifications