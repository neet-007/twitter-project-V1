import React from 'react'
import PageTopBar from '../../components/UI/PageTopBar'
import PostCard from '../../components/PostCard'
import { useAtom } from 'jotai'
import { commentDetailsAtom } from '../../lib/jotai/atoms'
import { useParams } from 'react-router-dom'
import PostForm from '../../components/PostForm'
import { useGetCommentsForPost } from '../../data/queriesAndMutations'
import PostFeed from '../../components/PostFeed'

function ShowComments() {

  const {id} = useParams()
  const [{postIdComment}] = useAtom(commentDetailsAtom)
  const {data, isLoading, isError} = useGetCommentsForPost(id)

  if (isLoading) return (<h1>...Loading</h1>)

  return (
    <section>
        <PageTopBar isShowComments={true}/>
        {!data || !data.length ? <h1>NO comments now add one</h1> :
        <PostCard postId={data[0].post.id} postContent={data[0].post.post_content} username={data[0].post.user_post.username} mention={data[0].post.user_post.mention}
        likes={data[0].post.likes} isComment={true} isShowComments={true} createdAt={data[0].post.created_at} userId={data[0].post.user_post.id} bookmarks={data[0].post.bookmarks}
        commentCount={data[0].post.comment_count}/>}
        <PostFeed posts={data}/>
    </section>
  )
}

export default ShowComments