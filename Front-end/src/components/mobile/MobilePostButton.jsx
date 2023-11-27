import React from 'react'
import { Pencil } from 'react-bootstrap-icons'

function MobilePostButton({handleClick}) {
  return (
    <button className='mobile-post-button'>
        <Pencil size={20} onClick={handleClick}/>
    </button>
  )
}

export default MobilePostButton