import React from 'react'
import PostCard from './PostCard'

function PostFeed({posts, message='No posts avaialbes'}) {
  return (
    <section className='home-container'>
        {posts ? posts.map(post => {
            return <PostCard key={post.id} postId={post.id} postContent={post.post_content}
            username={post.user_post.username} mention={post.user_post.mention}
            createdAt={post.created_at} likes={post.likes} userId={post.user_post.id}
            commentCount={post.comment_count} bookmarks={post.bookmark}/>
        })
        : <h1>{message}</h1>}
    </section>
  )
}

export default PostFeed