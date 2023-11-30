import React from 'react'
import ProfilePic from './ProfilePic'
import ProfileCard from './ProfileCard'
import { useNavigate } from 'react-router-dom'
import { Bookmark, Chat, Heart } from 'react-bootstrap-icons'
import { addLike } from '../data/api'
function PostCard({postId, postContent, username, mention, likes,
                  isCommentActive, isComment=null, postCommentId}) {
  const navigate = useNavigate()
  return (
    <article className='post-card-container'>
        <ProfilePic isHome={true} postCardToProfile={navigate}/>
        <ProfileCard className={'profile-card'} username={username} mention={mention}/>
        <div className='post-content'>
            {postContent}
        </div>
        {isComment != null && <img className={'post-img'} src="src/assets/profile-pic.png" alt="" />}
        <div className='post-interact'>
          <span onClick={()=>addLike(postId)}><Heart size={20}/> <span>{likes}</span></span>

          <span ><Chat size={20}/> <span>0</span></span>

          <span><Bookmark size={20}/> <span>0</span></span>

        </div>
    </article>
  )
}

export default PostCard