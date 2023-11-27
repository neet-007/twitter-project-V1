import React from 'react'
import PostForm from '../PostForm'
import { ArrowLeft } from 'react-bootstrap-icons'
import TwitterButton from '../UI/TwitterButton'
import { useNavigate } from 'react-router-dom'
function PostModal() {
  const navigate = useNavigate()
  return (
    <article className='post-modal-container'>
        <div className="post-modal-first-row">
            <ArrowLeft size={20} onClick={()=>{navigate(-1)}}/>
            <div className="post-modal-buttons">
                <TwitterButton Name='Draft' color={'gray'}/>
                <TwitterButton Name='Post' color={'blue'}/>
            </div>
        </div>
        <PostForm/>
    </article>
  )
}

export default PostModal