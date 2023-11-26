import React, { useState } from 'react'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import SwitchButton from '../../components/UI/SwitchButton'
import NavBarItem from '../../components/UI/NavBarItem'

function Notifications() {
  const NOTIFICATIONS_TABS = ['All', 'Verified', 'Mentions']
  const [SelectedTab, setSelectedTab] = useState('All')
  return (
    <div>
        <SwitchButtonContainer>
            {NOTIFICATIONS_TABS.map(tab => {
                return <SwitchButton Name={tab} Selected={SelectedTab} setSelectedTab={()=>{setSelectedTab(tab)}}/>
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