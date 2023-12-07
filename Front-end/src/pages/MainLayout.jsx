import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import MobileTopBar from '../components/mobile/MobileTopBar'
import MobileSideNav from '../components/mobile/MobileSideNav'
import MobileBottomBar from '../components/mobile/MobileBottomBar'
import SideNavBar from '../components/SideNavBar'
import SerachSideBar from '../components/SerachSideBar'
import { useClickOutSideToClose } from '../hooks/useClickOutsideToClose'
import { useAtom } from 'jotai'
import { mobileSideNavOnAtom } from '../lib/jotai/atoms'
function MainLayout({}) {

  const [mobileSideNavON, setMobileNavON] = useAtom(mobileSideNavOnAtom)
  let domNode = useClickOutSideToClose(() => setMobileNavON(false))
  return (
    <div className='main-layout'>
        <MobileTopBar/>
        <MobileSideNav myref={domNode}/>
        {<SideNavBar/>}
        <section className='home-mobile-main-layout'>
            <Suspense fallback={<h1>Loading...</h1>}>
              <div className={`idea ${mobileSideNavON ? 'opacity':''}`}>
                <Outlet/>
              </div>
            </Suspense>
        </section>
        {<SerachSideBar/>}
        <MobileBottomBar/>
    </div>
  )
}

export default MainLayout