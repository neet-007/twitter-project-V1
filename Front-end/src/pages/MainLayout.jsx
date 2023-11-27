import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import MobileTopBar from '../components/mobile/MobileTopBar'
import MobileSideNav from '../components/mobile/MobileSideNav'
import MobileBottomBar from '../components/mobile/MobileBottomBar'
function MainLayout() {
  return (
    <div>
        {/*<MobileTopBar/>*/}
        {/*<MobileSideNav/>*/}
        <section>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet/>
            </Suspense>
        </section>
        <MobileBottomBar/>
    </div>
  )
}

export default MainLayout