import React from 'react'
import { Envelope, ThreeDots } from 'react-bootstrap-icons'

function IconButton({Name}) {
  return (
    <button className='icon-button'>
       {
        Name == 'message' ? <Envelope size={20}/>:
        Name == 'select' ? <ThreeDots size={20}/>:''
       }
    </button>
  )
}

export default IconButton