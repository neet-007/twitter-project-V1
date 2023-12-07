import React, {useState} from 'react'
import PageTopBar from '../../components/UI/PageTopBar'
import ProfileInfo from '../../components/ProfileInfo'
import PostCard from '../../components/PostCard'
import SwitchButton from '../../components/UI/SwitchButton'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import MobileBottomBar from '../../components/mobile/MobileBottomBar'
import { useParams } from 'react-router-dom'
import { useGetPostByUser } from '../../data/queriesAndMutations'

function Profile() {
  const PROFILE_TABS = ['Profile','Repiles','Media','Likes']
  const [selectedTab, setSelectedTab] = useState('Profile')

  const { id } = useParams()
  const {data, isLoading, isError} = useGetPostByUser(id)
  console.log(data)
  return (
    <>
        <PageTopBar userPostCount={data ? data[0].user_post.post_count : 0}/>
        <ProfileInfo userProfileId={id}/>
        <SwitchButtonContainer>
          {PROFILE_TABS.map(tab => {
            return <SwitchButton key={tab} Name={tab} Selected={selectedTab} setSelectedTab={() => setSelectedTab(tab)}/>
          })}
        </SwitchButtonContainer>
        {isLoading ? <h1>Loading</h1> : data ?
        data.map(post => {
          return <PostCard key={post.id} postId={post.id} postContent={post.post_content}
          username={post.user_post.username} mention={post.user_post.mention}
          likes={post.likes} userId={post.user_post.id}/>
        })
        : <h1>no posts</h1>}
    </>
  )
}

export default Profile