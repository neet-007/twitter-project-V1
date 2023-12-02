import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import ProfileCard from '../ProfileCard'
import ProfileInfo from '../ProfileInfo'
import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai'
import { isCommentAtom } from '../../lib/jotai/atoms'

function PageTopBar({isShowComments}) {

  const setIsComment = useSetAtom(isCommentAtom)
  const navigate = useNavigate()
  return (
    <header className='page-top-bar'>
        <ArrowLeft size={20} onClick={()=>{navigate(-1);
                                           setIsComment(false)}}/>
        {isShowComments == true ? <h2>Post</h2> :
          <ProfileCard pageTopBar={true} profilePageTopBar={true} />
        }
    </header>
  )
}

export default PageTopBar