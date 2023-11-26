import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import ProfileCard from '../ProfileCard'
import ProfileInfo from '../ProfileInfo'

function PageTopBar() {
  return (
    <header className='page-top-bar'>
        <ArrowLeft size={20}/>
        <ProfileCard pageTopBar={true} profilePageTopBar={true} />
    </header>
  )
}

export default PageTopBar