import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import ProfilePic from './ProfilePic'
import {Image, FiletypeGif, Calendar, GeoAlt} from 'react-bootstrap-icons'
import CSRFToken from '../data/CSRFToken'
import { newPost } from '../data/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNewComment, useNewPost } from '../data/queriesAndMutations'
import TwitterButton from './UI/TwitterButton'

function updateTextareaSize(textarea){
    if (textarea == null) return

    textarea.style.height = '0'
    textarea.style.height = `${textarea.scrollHeight}px`
}
function PostForm({className, postToCommentId}) {
    const queryClient = useQueryClient()
    /*const newPostMutaion = useMutation({
        mutationFn: newPost,
        onSuccess: queryClient.invalidateQueries(['posts',{exact:true}])
    })*/
    const {mutateAsync: createNewPost} = useNewPost()
    const {mutateAsync: createNewComment} = useNewComment()
    const [inputValue, setInputValue] = useState()
    const textareaRef = useRef()

    const inputRef = useCallback((textarea)=>{
        updateTextareaSize(textarea)
        textareaRef.current = textarea
    },[])

    useLayoutEffect(() => {
        updateTextareaSize(textareaRef.current)
    },[inputValue])

    const onSubmit = (e, inputValue) => {
        e.preventDefault()

        //newPost({post_content:inputValue, post_img:null})
        /*newPostMutaion.mutate({
            post_content:inputValue, post_img:null
        })*/
        postToCommentId ? createNewComment({id:postToCommentId, post_content:inputValue, post_img:null}) : createNewPost({post_content:inputValue, post_img:null})
        setInputValue('')
        console.log('posted')
    }
  return (
    <form onSubmit={(e)=>{onSubmit(e, inputValue)}} id='post-form' className='post-form'>
        <CSRFToken/>
        <div className="post-form-pic-textarea">
            <ProfilePic/>
            <textarea className='form-textarea' placeholder="What's happining?"
            ref={inputRef}
            style={{height:0}}
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}/>
        </div>
        <div className={`post-form-interactions ${className}`}>
            <Image />
            <FiletypeGif />
            <Calendar />
            <GeoAlt />
            <TwitterButton Name='Post' color={'blue'} className={'ms-auto'}/>
        </div>
    </form>
  )
}

export default PostForm