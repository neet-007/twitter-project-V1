import './assets/App.css'
import SideNavBar from './components/SideNavBar'
import MobileBottomBar from './components/mobile/MobileBottomBar'
import MobileTopBar from './components/mobile/MobileTopBar'
import Home from './pages/Home/Home'
function App() {

  return (
    <>
      <MobileTopBar/>
      <Home/>
      app
      <MobileBottomBar/>
    </>
  )
}

export default App
