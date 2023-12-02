import React from 'react'
import PageTopBar from '../../components/UI/PageTopBar'
import PostCard from '../../components/PostCard'
import { useAtom } from 'jotai'
import { commentDetailsAtom } from '../../lib/jotai/atoms'

function ShowComments() {
  const [{postIdComment, postContentComment, usernameComment, mentionComment, likesComment}] = useAtom(commentDetailsAtom)
  return (
    <section>
        <PageTopBar isShowComments={true}/>
        <PostCard postId={postIdComment} postContent={postContentComment} username={usernameComment} mention={mentionComment} likes={likesComment} isComment={true}/>
    </section>
  )
}

export default ShowComments