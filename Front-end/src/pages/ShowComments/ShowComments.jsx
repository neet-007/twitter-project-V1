import React from 'react'
import PageTopBar from '../../components/UI/PageTopBar'
import PostCard from '../../components/PostCard'
import { useAtom } from 'jotai'
import { commentDetailsAtom } from '../../lib/jotai/atoms'
import PostForm from '../../components/PostForm'

function ShowComments() {
  const [{postIdComment, postContentComment, usernameComment, mentionComment, likesComment}] = useAtom(commentDetailsAtom)
  return (
    <section>
        <PageTopBar isShowComments={true}/>
        <PostCard postId={postIdComment} postContent={postContentComment} username={usernameComment} mention={mentionComment} likes={likesComment} isComment={true} isShowComments={true}/>
        <PostCard postId={1} postContent={'dsadasdsadsadsadsadasdsadsadsadada'} username={'username'} mention={'@username'} likes={0} />
        <PostCard postId={1} postContent={'dsadasdsadsadsadsadasdsadsadsadada'} username={'username'} mention={'@username'} likes={0}/>
        <PostCard postId={1} postContent={'dsadasdsadsadsadsadasdsadsadsadada'} username={'username'} mention={'@username'} likes={0}/>
        <PostCard postId={1} postContent={'dsadasdsadsadsadsadasdsadsadsadada'} username={'username'} mention={'@username'} likes={0}/>
    </section>
  )
}

export default ShowComments