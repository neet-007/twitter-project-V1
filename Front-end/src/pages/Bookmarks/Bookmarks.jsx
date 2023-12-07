import React from 'react'
import PageTopBar from '../../components/UI/PageTopBar'
import PostCard from '../../components/PostCard'
import { useGetBookmarkedPosts } from '../../data/queriesAndMutations'
function Bookmarks() {

  const {data} = useGetBookmarkedPosts()
  return (
    <section>
      <PageTopBar/>
      {data ? data.map(post => {
        return <PostCard key={post.id} postId={post.id} postContent={post.post_content}
        username={post.user_post.username} mention={post.user_post.mention}
        createdAt={post.created_at} likes={post.likes} userId={post.user_post.id}
        commentCount={post.comment_count} bookmarks={post.bookmark}/>
      }):''}
    </section>
  )
}

export default Bookmarks