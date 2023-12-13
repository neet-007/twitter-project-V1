import './assets/App.css'
import { Routes, Route } from 'react-router-dom'
import SideNavBar from './components/SideNavBar'
import MobileBottomBar from './components/mobile/MobileBottomBar'
import MobileTopBar from './components/mobile/MobileTopBar'
//import FollowInfo from './pages/FollowInfo/FollowInfo'
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
import { lazy, useState } from 'react'

const SignUp = LazyLoad('../pages/AuthSection/SignUp/SignUp')
const Login = LazyLoad('../pages/AuthSection/LogIn/LogIN')
const Home = LazyLoad('../pages/Home/Home')
const Profile = LazyLoad('../pages/Profile/Profile')
const Search = LazyLoad('../pages/Search/Search')
const Notifications = LazyLoad('../pages/Notificatoins/Notifications')
const PostModal = LazyLoad('../components/mobile/PostModal')
const ShowComments = LazyLoad('../pages/ShowComments/ShowComments')
const Lists = LazyLoad('../pages/Lists/Lists')
const Bookmarks = LazyLoad('../pages/Bookmarks/Bookmarks')
const FollowInfo = LazyLoad('../pages/FollowInfo/FollowInfo')
const CreateProfile = LazyLoad('../pages/CreateProfile/CreateProfile')

function App() {

  const [mobileSideNavON, setMobileSideNavOn] = useState(false)
  return (
    <>{/*changed this one*/}
      <MobileSideNav/>
      <Routes>
        {/* Public routes*/}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/log-in' element={<Login/>}/>
        </Route>
        {/* Private routes*/}
        {/*changed this one*/}
        <Route element={<MainLayout/>}>
          {/*changed this one*/}
          <Route index exact element={<Home/>}/>
          {/*changed this one*/}
          <Route path='/profile/:id' element={<Profile/>}/>
          {/*changed this one*/}
          <Route path='/search' element={<Search/>}/>
          {/*changed this one*/}
          <Route path='/notifications' element={<Notifications/>}/>
          {/*changed this one*/}
          <Route path='/lists/:id' element={<Lists/>}/>
          {/*changed this one*/}
          <Route path='/bookmarks' element={<Bookmarks/>}/>
          {/*changed this one*/}
          <Route path='/post' element={<PostModal/>}/>
          <Route path='/status/:id' element={<ShowComments/>}/>
          <Route path='/following' element={<FollowInfo/>}/>
          <Route path='/create-profile' element={<CreateProfile/>}/>
          <Route path='/soon' element={<Soon/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
