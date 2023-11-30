import './assets/App.css'
import { Routes, Route } from 'react-router-dom'
import SideNavBar from './components/SideNavBar'
import MobileBottomBar from './components/mobile/MobileBottomBar'
import MobileTopBar from './components/mobile/MobileTopBar'
import FollowInfo from './pages/FollowInfo/FollowInfo'
import MobileSideNav from './components/mobile/MobileSideNav'
//import Home from './pages/Home/Home'
//import Notifications from './pages/Notificatoins/Notifications'
//import Profile from './pages/Profile/Profile'
//import Search from './pages/Search/Search'
import AuthLayout from './pages/AuthSection/AuthLayout'
//import SignUp from './pages/AuthSection/SignUp/SignUp'
//import Login from './pages/AuthSection/LogIn/LogIn'
import MainLayout from './pages/MainLayout'
//import Lists from './pages/Lists/Lists'
//import Bookmarks from './pages/Bookmarks/Bookmarks'
import Soon from './pages/Soon'
//import PostModal from './components/mobile/PostModal'
import { LazyLoad } from './utils/LazyLoad'
import { useState } from 'react'

const SignUp = LazyLoad('../pages/AuthSection/SignUp/SignUp')
const Login = LazyLoad('../pages/AuthSection/LogIn/LogIN')
const Home = LazyLoad('../pages/Home/Home')
const Profile = LazyLoad('../pages/Profile/Profile')
const Search = LazyLoad('../pages/Search/Search')
const Notifications = LazyLoad('../pages/Notificatoins/Notifications')
const PostModal = LazyLoad('../components/mobile/PostModal')
const Lists = LazyLoad('../pages/Lists/Lists')
const Bookmarks = LazyLoad('../pages/Bookmarks/Bookmarks')
function App() {

  const [mobileSideNavON, setMobileSideNavOn] = useState(false)
  return (
    <>
      <MobileSideNav mobileSideNavON={mobileSideNavON} setMobileSideNavON={setMobileSideNavOn}/>
      <Routes>
        {/* Public routes*/}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/log-in' element={<Login/>}/>
        </Route>
        {/* Private routes*/}
        <Route element={<MainLayout mobileSideNavON={mobileSideNavON} setMobileNavOn={setMobileSideNavOn}/>}>
          <Route index element={<Home mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>}/>
          <Route path='/profile' element={<Profile mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>}/>
          <Route path='/search' element={<Search mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>}/>
          <Route path='/notifications' element={<Notifications mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>}/>
          <Route path='/lists' element={<Lists mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>}/>
          <Route path='/bookmarks' element={<Bookmarks mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>}/>
          <Route path='/post' element={<PostModal mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>}/>
          <Route path='/soon' element={<Soon mobileSideNavON={mobileSideNavON} setMobileSideNavOn={setMobileSideNavOn}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
