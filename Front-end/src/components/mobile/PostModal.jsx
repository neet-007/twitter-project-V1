import React, { useState } from 'react'
import PostForm from '../PostForm'
import { ArrowLeft, Tree } from 'react-bootstrap-icons'
import TwitterButton from '../UI/TwitterButton'
import { useNavigate } from 'react-router-dom'
import PostCard from '../PostCard'

function PostModal() {
  const [isComment, setIsComment] = useState(true)
  const [postId, setpostId] = useState('')
  const [postContent, setpostContent] = useState('')
  //const [postImage, setpostImage] = useState('')
  const [username, setusername] = useState('')
  const [metion, setmetion] = useState('')
  const [likes, setlikes] = useState('')

  const setCommentDetails = (postId, postContent, username, mention, likes)=>{
    setpostId(postId)
    setpostContent(postContent)
    //setpostImage(postImage)
    setusername(username)
    setmetion (mention)
    setlikes (likes)
  }
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
        {isComment != null && <PostCard isComment={true} setIsComment={setIsComment}
                                        setCommentDetails={setCommentDetails}
                                        postId={postId} postContent={postContent}
                                        username={username} mention={metion}
                                        likes={likes}/>}
        <PostForm/>
    </article>
  )
}

export default PostModal