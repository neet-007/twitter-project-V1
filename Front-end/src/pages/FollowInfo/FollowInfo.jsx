import React, { useState } from 'react'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import SwitchButton from '../../components/UI/SwitchButton'
import PageTopBar from '../../components/UI/PageTopBar'
import AdjustedProfileCard from '../../components/AdjustedProfileCard'
import { useGetUserFollowers, useGetUserFollowing } from '../../data/queriesAndMutations'

function FollowInfo() {
  const FOLLOW_TABS = ['Verified Followers', 'Followers', 'Following']
  const [SelectedTab, setSelectedTab] = useState('Following')

  const {data} = SelectedTab == 'Following' ? useGetUserFollowing(1) : SelectedTab == 'Followers' ? useGetUserFollowers(1) : ''

  return (
    <section>
        <PageTopBar/>
        <SwitchButtonContainer>
            {FOLLOW_TABS.map(tab => {
                return <SwitchButton key={tab} Name={tab} Selected={SelectedTab} setSelectedTab={() => {setSelectedTab(tab)}}/>
            })}
        </SwitchButtonContainer>
        <div className='p-2'>
        {data ?
         data.map(user => {
          return <AdjustedProfileCard key={user.id} username={user.username} mention={user.mention} bio={'this ios bop'}/>
         }):''}
        </div>
    </section>
  )
}

export default FollowInfo