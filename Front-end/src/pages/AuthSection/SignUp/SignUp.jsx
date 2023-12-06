import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import TwitterButton from '../../../components/UI/TwitterButton'
//import { register } from '../../../data/api'
import CSRFToken from '../../../data/CSRFToken'
import { useLogIn, useRegister } from '../../../data/queriesAndMutations'
import { getCurrentUser } from '../../../data/api'
import { useUserContetx } from '../../../context/AuthContext'
function SignUp() {
  const [formData, setFormData] = useState({
    username:'',
    password:'',
    re_password:''
  })

  //const navigate = useNavigate()

  const {username, password, re_password} = formData
  const {mutateAsync:register, isError} = useRegister()
  const {mutateAsync:logIn, isErrorr} = useLogIn()
  const navigate = useNavigate()
  const onChange = (e) => setFormData({...formData, [e.target.name]:e.target.value})

  const {isAuthenticated, setIsAuthenticated, setUser} = useUserContetx()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(password)
    console.log(re_password)
    if (password === re_password){
      register({username, password, re_password}).then(res => {
        logIn({username, password}).then(res => {
          getCurrentUser().then(res => {
            console.log(res)
            setIsAuthenticated(true)
            setUser({
              id:res.id,
              username:res.username,
              mention:res.mention,
              bio:res.bio,
              following_count:res.following_count,
              followers_count:res.followers_count,
              post_count:res.post_count
            })
          })
        })
      }).then(navigate('/'))
    }
  }

  if (isAuthenticated) return <Navigate to='/'/>
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