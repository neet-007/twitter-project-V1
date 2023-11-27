import './assets/App.css'
import { Routes, Route } from 'react-router-dom'
import SideNavBar from './components/SideNavBar'
import MobileBottomBar from './components/mobile/MobileBottomBar'
import MobileTopBar from './components/mobile/MobileTopBar'
import FollowInfo from './pages/FollowInfo/FollowInfo'
import Home from './pages/Home/Home'
import Notifications from './pages/Notificatoins/Notifications'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'
import AuthLayout from './pages/AuthSection/AuthLayout'
import SignUp from './pages/AuthSection/SignUp/SignUp'
import Login from './pages/AuthSection/LogIn/LogIn'
function App() {

  return (
    <>
      <Routes>
        {/* Public routes*/}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/log-in' element={<Login/>}/>
        </Route>
        {/* Private routes*/}
        <Route index element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
      </Routes>
    </>
  )
}

export default App
