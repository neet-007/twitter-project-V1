import React, { useEffect, useState } from 'react'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import SwitchButton from '../../components/UI/SwitchButton'
import NavBarItem from '../../components/UI/NavBarItem'
import MobileTopBar from '../../components/mobile/MobileTopBar'
import {getPosts, newPost, showUsers, getCurrentUser} from '../../data/api'
import { logOut } from '../../data/api'

function Notifications({mobileSideNavON ,setMobileSideNavOn}) {
  const NOTIFICATIONS_TABS = ['All', 'Verified', 'Mentions']
  const [SelectedTab, setSelectedTab] = useState('All')

  return (
    <div>
        <MobileTopBar middleSection='notifacation' mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>
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