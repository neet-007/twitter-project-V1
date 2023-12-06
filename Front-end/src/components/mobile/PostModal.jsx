import React, { useState } from 'react'
import PostForm from '../PostForm'
import { ArrowLeft, Tree } from 'react-bootstrap-icons'
import TwitterButton from '../UI/TwitterButton'
import { useNavigate } from 'react-router-dom'
import PostCard from '../PostCard'
import { useAtom } from 'jotai'
import { commentDetailsAtom, isCommentAtom } from '../../lib/jotai/atoms' 

function PostModal() {

  const [{postIdComment, postContentComment, usernameComment, mentionComment, likesComment}] = useAtom(commentDetailsAtom)
  const [isComment, setIsComment] = useAtom(isCommentAtom)
  const navigate = useNavigate()

  return (
    <article className='post-modal-container'>
        <div className="post-modal-first-row">
            <ArrowLeft size={20} onClick={()=>{navigate(-1)
                                               setIsComment(false)}}/>
            <div className="post-modal-buttons">
                <TwitterButton Name='Draft' color={'gray'}/>
                <TwitterButton Name='Post' color={'blue'} type={'submit'} form={'post-form'} onClick={() => {setIsComment(false)}}/>
            </div>
        </div>
        {isComment == true && <PostCard postId={postIdComment} postContent={postContentComment} username={usernameComment} mention={mentionComment} likes={likesComment} isComment={true}/>}
        <PostForm postToCommentId={postIdComment}/>
    </article>
  )
}

export default PostModal