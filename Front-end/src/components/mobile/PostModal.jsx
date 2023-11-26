import React from 'react'
import PostForm from '../PostForm'
import { ArrowLeft } from 'react-bootstrap-icons'
import TwitterButton from '../UI/TwitterButton'
function PostModal() {
  return (
    <article className='post-modal-container'>
        <div className="post-modal-first-row">
            <ArrowLeft size={20}/>
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