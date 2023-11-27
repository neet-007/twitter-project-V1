import React from 'react'
import { Link } from 'react-router-dom'
import TwitterButton from '../../../components/UI/TwitterButton'
function LogIn() {
  return (
    <>
      <h3 className='header-auth-form'>
        Log In
      </h3>
      <p className='paragraph-auth-form'>Enter you details to log in</p>
      <form className='auth-form'>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' />
        <label htmlFor="password">Password</label>
        <input type="password" id='password'/>
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