import React from 'react'
import { Twitter } from 'react-bootstrap-icons'
import { Outlet, Navigate } from 'react-router-dom'
function AuthLayout() {
  const isAuthintecated = false
  return (
    <>
        {isAuthintecated ?
        <Navigate to='/'/>:(
            <>
                <section className='auth-layout'>
                    <Twitter size={60}/>
                    <Outlet/>
                </section>
            </>
        )}
    </>
  )
}

export default AuthLayout