import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import ProfileCard from '../ProfileCard'
import ProfileInfo from '../ProfileInfo'
import { useNavigate } from 'react-router-dom'

function PageTopBar() {
  const navigate = useNavigate()
  return (
    <header className='page-top-bar'>
        <ArrowLeft size={20} onClick={()=>{navigate(-1)}}/>
        <ProfileCard pageTopBar={true} profilePageTopBar={true} />
    </header>
  )
}

export default PageTopBar