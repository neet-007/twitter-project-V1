import React from 'react'
import PageTopBar from '../../components/UI/PageTopBar'
import PostCard from '../../components/PostCard'
import { useAtom } from 'jotai'
import { commentDetailsAtom } from '../../lib/jotai/atoms'
import { useParams } from 'react-router-dom'
import PostForm from '../../components/PostForm'
import { useGetCommentsForPost } from '../../data/queriesAndMutations'

function ShowComments() {

  const {id} = useParams()
  const [{postIdComment, postContentComment, usernameComment, mentionComment, likesComment}] = useAtom(commentDetailsAtom)
  const {data, isLoading, isError} = useGetCommentsForPost(id)

  return (
    <section>
        <PageTopBar isShowComments={true}/>
        <PostCard postId={postIdComment} postContent={postContentComment} username={usernameComment} mention={mentionComment} likes={likesComment} isComment={true} isShowComments={true}/>
        {data ? 
        data.map(post => {
          return <PostCard  key={post.id} postId={post.id} postContent={post.post_content}
          username={post.user_post.username} mention={post.user_post.mention}
          createdAt={post.created_at} likes={post.likes} userId={post.user_post.id}/>
        })
        :<h1>No comments</h1>}
    </section>
  )
}

export default ShowComments