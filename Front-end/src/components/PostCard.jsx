import React from 'react'
import ProfilePic from './ProfilePic'
import ProfileCard from './ProfileCard'
function PostCard() {
  return (
    <article className='post-card-container'>
        <ProfilePic isHome={true}/>
        <ProfileCard className={'profile-card'}/>
        <div className='post-content'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque possimus quidem illo quis sapiente, consequuntur et amet vitae modi natus iste suscipit, iusto adipisci praesentium consequatur voluptatem vel accusamus nostrum beatae id labore. Aspernatur, praesentium eum qui, ipsam corrupti dolorum cupiditate quod iste sequi facilis accusamus non repudiandae fugiat!
        </div>
        <img className={'post-img'} src="src/assets/profile-pic.png" alt="" />
        <div className='post-interact'></div>
    </article>
  )
}

export default PostCard