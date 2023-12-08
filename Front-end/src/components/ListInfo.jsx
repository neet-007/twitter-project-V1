import React from 'react'
import TwitterButton from './UI/TwitterButton'
import ProfilePic from './ProfilePic'

function ListInfo({listTitle='List Title', bio='bio bio bio bio bio bio bio', username='username',
                  mention='mentio', members='members', following='following'}) {
  return (
    <div className='list-info-container'>
        <img src="/src/assets/header.png" alt="list-header" />
        <div className='list-info-text'>
            <h2>{listTitle}</h2>
            <p>{bio}</p>
            <div className='list-info-user'>
                <ProfilePic />
                <span>{username}</span>
                <span>@{mention}</span>
            </div>
            <div className='list-info-follow'>
                <span>{members}</span><span>{following}</span>
            </div>
            <TwitterButton Name='Follow' color={'black'}/>
        </div>
    </div>
  )
}

export default ListInfo