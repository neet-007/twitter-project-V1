import React, { useEffect, useState } from 'react'
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
import {getPosts, newPost, showUsers} from '../../data/api'
import CSRFToken from '../../data/CSRFToken'



function Home({mobileSideNavON, setMobileSideNavOn}) {
  const TABS = ['Recent', 'Following']
  const [selectedTab, setSelectedTab] = useState('Recent')
  const [posts, setPosts] = useState([])

  return (
    <>
      <form action="">
      <CSRFToken/>
      </form>
      <MobileTopBar mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>
      <SwitchButtonContainer>
        {TABS.map(tab => {
          return <SwitchButton key={tab} Name={tab} Selected={selectedTab}
          setSelectedTab={setSelectedTab}/>
        })}
      </SwitchButtonContainer>
      <div className="home-container">
        {posts.map(post => {
         return <PostCard key={post.id} postContent={post.post_content}
          username={post.user_post.username} mention={post.user_post.mention}
          likes={post.likes}/>
        })}
      </div>
    </>
  )
}

export default Home