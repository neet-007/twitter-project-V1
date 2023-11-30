import React, { useState } from 'react'
import PostForm from '../PostForm'
import { ArrowLeft, Tree } from 'react-bootstrap-icons'
import TwitterButton from '../UI/TwitterButton'
import { useNavigate } from 'react-router-dom'
import PostCard from '../PostCard'

function PostModal({isComment='aa'}) {

  const [comment_detatils, setCommentDetails] = useState({
    post_id:'',
    post_content:'',
    post_image:''
  })
  const navigate = useNavigate()
  return (
    <article className='post-modal-container'>
        <div className="post-modal-first-row">
            <ArrowLeft size={20} onClick={()=>{navigate(-1)}}/>
            <div className="post-modal-buttons">
                <TwitterButton Name='Draft' color={'gray'}/>
                <TwitterButton Name='Post' color={'blue'} type={'submit'} form={'post-form'}/>
            </div>
        </div>
        {isComment && <PostCard />}
        <PostForm/>
    </article>
  )
}

export default PostModal