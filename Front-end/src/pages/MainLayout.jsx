import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import MobileTopBar from '../components/mobile/MobileTopBar'
import MobileSideNav from '../components/mobile/MobileSideNav'
import MobileBottomBar from '../components/mobile/MobileBottomBar'
import SideNavBar from '../components/SideNavBar'
import SerachSideBar from '../components/SerachSideBar'
function MainLayout({mobileSideNavON, setMobileNavOn}) {
  return (
    <div className='main-layout'>
        {/*<MobileTopBar/>*/}
        {/*<MobileSideNav mobileSideNavON={mobileSideNavON} setMobileNavON={setMobileNavOn}/>*/}
        <SideNavBar/>
        <section className='home-mobile-main-layout'>
            <Suspense fallback={<h1>Loading...</h1>}>
              <div className={`idea ${mobileSideNavON ? 'opacity':''}`}
               onClick={()=>{mobileSideNavON==true && setMobileNavOn(!mobileSideNavON)}}>
              <Outlet/>
              </div>
            </Suspense>
        </section>
        <SerachSideBar/>
        {/*<MobileBottomBar/>*/}
    </div>
  )
}

export default MainLayout