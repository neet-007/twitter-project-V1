import React from 'react'
import { PatchCheck, ThreeDots, Briefcase, GeoAlt } from 'react-bootstrap-icons'
import IconHoverEffect from './UI/IconHoverEffect'
import TwitterButton from './UI/TwitterButton'
import { useNavigate } from 'react-router-dom'

function ProfileCard({className, isVerified=true, isMobileSideNav=false, pageTopBar=false,
                     profilePageTopBar=false ,profileInfo=false, username, mention, followingCount, followersCount,
                     createdAtFortmated, isShowComments, userPostCount}) {

  const navigate = useNavigate()
  return (
    <div className={className}>
        <span>{username} {isVerified ? <PatchCheck/>:''}</span>
        {!profilePageTopBar ?
          <span className='profile-card-mention'>@{mention}</span>:''
        }
        {
            !isMobileSideNav && !pageTopBar && !profileInfo ? <><span>{createdAtFortmated}</span>
            {isShowComments && <TwitterButton Name='Follow' color={'black'}/>}
            <IconHoverEffect className={'profile-card-select'}>
                <ThreeDots/>
            </IconHoverEffect>
        </> : ''}
        {
            isMobileSideNav || pageTopBar || profileInfo ? <div>
                                {pageTopBar?
                                <span>{userPostCount} Posts</span>:''
                                }
                                {profileInfo ?
                                <>
                                  <h6 className='bio'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, porro.</h6>
                                  <div className='date-occupaton'>
                                    <span><Briefcase/>Occupation</span>
                                    <span><GeoAlt/>Joind july 2017</span>
                                  </div>
                                </>:''
                                }
                                {!pageTopBar || profileInfo?
                                <>
                                <span onClick={()=>navigate('/following')}>{followingCount}Following</span>
                                <span onClick={()=>navigate('/following')}>{followersCount}Followers</span>
                                </>:''
                                }
                                {profileInfo ?
                                 <div>
                                    not followed by any one you follow
                                 </div>:''
                                }
                              </div>
                            :''
        }
    </div>
  )
}

export default ProfileCard