import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'
import ProfilePic from './ProfilePic'

function updateTextareaSize(textarea){
    if (textarea == null) return

    textarea.style.height = '0'
    textarea.style.height = `${textarea.scrollHeight}px`
}
function PostForm() {

    const [inputValue, setInputValue] = useState()
    const textareaRef = useRef()

    const inputRef = useCallback((textarea)=>{
        updateTextareaSize(textarea)
        textareaRef.current = textarea
    },[])

    useLayoutEffect(() => {
        updateTextareaSize(textareaRef.current)
    },[inputValue])
  return (
    <form>
        <ProfilePic/>
        <textarea className='form-textarea' placeholder="What's happining?"
        ref={inputRef}
        style={{height:0}}
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}/>
        <div className="interactions"></div>
    </form>
  )
}

export default PostForm