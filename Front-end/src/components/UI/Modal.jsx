import { useAtom } from 'jotai'
import React from 'react'
import ReactDOM  from 'react-dom'
import { modalAtom } from '../../lib/jotai/atoms'
import {ArrowLeft, Twitter, X} from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const MODAL_STYLES = {
    position: 'fixed',
    borderRadius: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: '50%',
    left: '50%',
    height: '400px',
    width: '400px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '1rem',
    zindex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom:0,
    right:0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zindex: 1000
}

function Modal({children, back}) {

  const [isOpen, setIsOpen] = useAtom(modalAtom)
  const navigate = useNavigate()
  if(!isOpen) return (null)

  return ReactDOM.createPortal(
    <>
       <div style={OVERLAY_STYLES}/>
       <div style={MODAL_STYLES}>
        <div style={{display:'flex', gap:'3rem'}}>
            <ArrowLeft size={30} onClick={back}/>
            <Twitter size={30}/>
            <X size={30} onClick={()=>{setIsOpen(false); navigate(-1)}}/>
        </div>
        {children}
       </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal