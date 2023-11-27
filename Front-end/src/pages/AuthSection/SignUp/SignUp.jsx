import React from 'react'
import { Link } from 'react-router-dom'
import TwitterButton from '../../../components/UI/TwitterButton'

function SignUp() {
  return (
    <>
      <h3 className='header-auth-form'>
        Create Your Account
      </h3>
      <p className='paragraph-auth-form'>To use your account please enter you details</p>
      <form className='auth-form'>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' />
        <label htmlFor="username">Username</label>
        <input type="text" id='username'/>
        <label htmlFor="password">Password</label>
        <input type="password" id='password'/>
        <label htmlFor="re-password">Re-Password</label>
        <input type="password" id='re-password'/>
        <TwitterButton Name='Sign Up' color={'black'} type={'submit'}/>
      </form>
      <p>
        Already have an account?
        <Link className='p-s' to='/log-in'>Login</Link>
      </p>
    </>
  )
}

export default SignUp