import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import ProfileCard from '../ProfileCard'
import ProfileInfo from '../ProfileInfo'
import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai'
import { isCommentAtom } from '../../lib/jotai/atoms'

function PageTopBar({isShowComments, userPostCount, name}) {

  const setIsComment = useSetAtom(isCommentAtom)
  const navigate = useNavigate()
  return (
    <header className='page-top-bar'>
        <ArrowLeft size={20} onClick={()=>{navigate(-1);
                                           setIsComment(false)}}/>
        <div className='page-top-bar-info'>
          {name ? <h2>{name}</h2> : ''}
          {isShowComments === true ? <h2>Post</h2> :
            <ProfileCard pageTopBar={true} profilePageTopBar={true} userPostCount={userPostCount}/>
          }
        </div>
    </header>
  )
}

export default PageTopBar