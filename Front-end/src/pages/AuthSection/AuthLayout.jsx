import React, { Suspense } from 'react'
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
                  <Suspense fallback={<h1>Loading</h1>}>
                    <Twitter size={60}/>
                    <Outlet/>
                  </Suspense>
                </section>
            </>
        )}
    </>
  )
}

export default AuthLayout