import './assets/App.css'
import SideNavBar from './components/SideNavBar'
import MobileBottomBar from './components/mobile/MobileBottomBar'
import MobileTopBar from './components/mobile/MobileTopBar'
import FollowInfo from './pages/FollowInfo/FollowInfo'
import Home from './pages/Home/Home'
import Notifications from './pages/Notificatoins/Notifications'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'
function App() {

  return (
    <>
      <MobileTopBar middleSection='search'/>
      <Search/>
      <MobileBottomBar/>
    </>
  )
}

export default App
