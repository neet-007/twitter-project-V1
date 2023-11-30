import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TwitterButton from '../../../components/UI/TwitterButton'
import { logIn } from '../../../data/api'
import CSRFToken from '../../../data/CSRFToken'
function LogIn() {
  const [formData, setFormData] = useState({
    username:'',
    password:''
  })

  const navigate = useNavigate()
  const {username, password} = formData

  const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})

  const onSubmit = (e) => {
    e.preventDefault()

    logIn(username, password)
    navigate('../')
  }
  return (
    <>
      <h3 className='header-auth-form'>
        Log In
      </h3>
      <p className='paragraph-auth-form'>Enter you details to log in</p>
      <form className='auth-form' onSubmit={(e)=>onSubmit(e)}>
        <CSRFToken/>
        <label htmlFor="email">Username</label>
        <input type="text" id='email'
               name='username' required
               value={username}
               onChange={(e)=>onChange(e)} />

        <label htmlFor="password">Password</label>
        <input type="password" id='password'
               name='password' required
               value={password}
               onChange={(e)=>onChange(e)}/>

        <TwitterButton Name='Sign Up' color={'black'} type={'submit'}/>
      </form>
      <p>
        don't have an account?
        <Link className='p-s' to='/sign-up'>Sign Up</Link>
      </p>
    </>
  )
}

export default LogIn