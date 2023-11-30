import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import MobileTopBar from '../components/mobile/MobileTopBar'
import MobileSideNav from '../components/mobile/MobileSideNav'
import MobileBottomBar from '../components/mobile/MobileBottomBar'
function MainLayout({mobileSideNavON, setMobileNavOn}) {
  return (
    <div>
        {/*<MobileTopBar/>*/}
        {/*<MobileSideNav mobileSideNavON={mobileSideNavON} setMobileNavON={setMobileNavOn}/>*/}
        <section>
            <Suspense fallback={<h1>Loading...</h1>}>
              <div className={`idea ${mobileSideNavON ? 'opacity':''}`}
               onClick={()=>{mobileSideNavON==true && setMobileNavOn(!mobileSideNavON)}}>
              <Outlet/>
              </div>
            </Suspense>
        </section>
        <MobileBottomBar/>
    </div>
  )
}

export default MainLayout