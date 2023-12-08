import React from 'react'
import PostCard from './PostCard'

function PostFeed({posts}) {
  return (
    <section className='home-container'>
        {posts ? posts.map(post => {
            return <PostCard key={post.id} postId={post.id} postContent={post.post_content}
            username={post.user_post.username} mention={post.user_post.mention}
            createdAt={post.created_at} likes={post.likes} userId={post.user_post.id}
            commentCount={post.comment_count} bookmarks={post.bookmark}/>
        })
        : <h1>NO posts availables</h1>}
    </section>
  )
}

export default PostFeed