import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TwitterButton from '../../../components/UI/TwitterButton'
import { register } from '../../../data/api'
import CSRFToken from '../../../data/CSRFToken'

function SignUp() {
  const [formData, setFormData] = useState({
    username:'',
    password:'',
    re_password:''
  })

  const navigate = useNavigate()

  const {username, password, re_password} = formData

  const onChange = (e) => setFormData({...formData, [e.target.name]:e.target.value})

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(password)
    console.log(re_password)
    if (password === re_password){
      register(username, password, re_password)
      navigate ('../log-in')
    }
  }
  return (
    <>
      <h3 className='header-auth-form'>
        Create Your Account
      </h3>
      <p className='paragraph-auth-form'>To use your account please enter you details</p>
      <form className='auth-form' onSubmit={e => onSubmit(e)}>
        <CSRFToken/>
        <label htmlFor="username">Username</label>
        <input type="text" id='username'
               name='username' required
               value={username}
               onChange={e => onChange(e)}/>

        <label htmlFor="password">Password</label>
        <input type="password" id='password'
               name='password' required
               minLength={8}
               value={password}
               onChange={e => onChange(e)}/>

        <label htmlFor="re-password">Confirm Password</label>
        <input type="password" id='re-password'
               name='re_password' required
               minLength={8}
               value={re_password}
               onChange={e => onChange(e)}/>

        <TwitterButton Name='Sign Up' color={'black'} type={'submit'}
                       />
      </form>
      <p>
        Already have an account?
        <Link className='p-s' to='/log-in'>Login</Link>
      </p>
    </>
  )
}

export default SignUp