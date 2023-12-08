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
import {getPosts, newPost, showUsers, getCurrentUser} from '../../data/api'
import CSRFToken from '../../data/CSRFToken'
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import { useGetPosts, useGetPostsByFollowing } from '../../data/queriesAndMutations'
import { useUserContetx } from '../../context/AuthContext'
import { isDesktop } from '../../Constants/Constatns'
import SearchMenu from '../../components/UI/SearchMenu'



function Home({}) {
  const TABS = ['Recent', 'Following']
  const [selectedTab, setSelectedTab] = useState('Recent')
  //const [posts, setPosts] = useState([])
  const {user} = useUserContetx()
  const queryClient = useQueryClient()
  const {data, isLoading, isError} = selectedTab == 'Recent' ? useGetPosts() : useGetPostsByFollowing()
  /*const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts()
  })*/

  if (isLoading) return (<h1>... isLoading</h1>)
  if (isError) return (<pre>{JSON.stringify(data.error)}</pre>)
  console.log(data)
  /*useEffect(()=>{
    const fetchData = async ()=>{
       let data = await getPosts()
       setPosts(data.data)
    }
    fetchData()
  },[])*/

  return (
    <>
      {/*<MobileTopBar mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>*/}
      <SwitchButtonContainer>
        {TABS.map(tab => {
          return <SwitchButton key={tab} Name={tab} Selected={selectedTab}
          setSelectedTab={setSelectedTab}/>
        })}
      </SwitchButtonContainer>
      <div className="home-container">
        {/*posts.map(post => {
         return <PostCard key={post.id} postId={post.id} postContent={post.post_content}
          username={post.user_post.username} mention={post.user_post.mention}
          likes={post.likes}/>
        })*/}
        <PostForm mobileHide={'mobile-hide'}/>
        {data.map(post => (
          <PostCard key={post.id} postId={post.id} postContent={post.post_content}
          username={post.user_post.username} mention={post.user_post.mention}
          createdAt={post.created_at} likes={post.likes} userId={post.user_post.id}
          commentCount={post.comment_count} bookmarks={post.bookmark}/>
        ))}
        {console.log(user)}

      </div>
    </>
  )
}

export default Home