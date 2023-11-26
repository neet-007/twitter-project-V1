import './assets/App.css'
import SideNavBar from './components/SideNavBar'
import MobileBottomBar from './components/mobile/MobileBottomBar'
import MobileTopBar from './components/mobile/MobileTopBar'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/__tests__/Profile'
function App() {

  return (
    <>
      <MobileTopBar/>
      <Profile/>
      <MobileBottomBar/>
    </>
  )
}

export default App
