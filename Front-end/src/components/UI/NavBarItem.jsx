import React from 'react'
import { Bell, Bookmark, Cash, DoorOpen, Envelope, HouseDoor, JournalText, People, Person, Search, Twitter } from 'react-bootstrap-icons'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
//import { logOut } from '../../data/api'
import { useLogOut } from '../../data/queriesAndMutations';
import { useUserContetx } from '../../context/AuthContext';

function NavBarItem({ item, route, className }) {
  const { pathname } = useLocation();

  const {mutateAsync:logOut, isError} = useLogOut()
  const {user, setIsAuthenticated} = useUserContetx()
  const navigate = useNavigate()

  const isActive = pathname === route; // Check if the current route matches the NavBarItem route

  const onClick = item == 'Logout' ? ()=>{logOut().then(res => {setIsAuthenticated(false); navigate('/log-in')})}:''
  // Map items to corresponding icons
  const getIcon = (item) => {
    switch (item) {
      case 'Person':
        return <Person size={30} />;
      case 'Twitter':
        return <Twitter size={30} />;
      case 'Home':
        return <HouseDoor size={30}/>
      case 'Explore':
        return <Search size={30} />
      case 'Notifications':
        return <Bell size={30} />
      case 'Messages':
        return <Envelope size={30} />
      case 'Lists':
        return <JournalText size={30} />;
      case 'Bookmarks':
        return <Bookmark size={30} />;
      case 'Communities':
        return <People size={30} />;
      case 'Monetization':
        return <Cash size={30} />;
      case 'Logout':
        return <DoorOpen size={30} />;
      default:
        return null;
    }
  };

  return (
    <li>
      <NavLink className={`nav-bar-item ${className}`} to={item == 'Person' ? `${route}/${user.id}` : route}
               onClick={()=>{onClick()}}>
        {getIcon(item)} {/* Render the corresponding icon */}
        {item == 'Twitter' ? '' : item}
      </NavLink>
    </li>
  );
}

export default NavBarItem

                /*<li>ItemItem</li>
                <li>ItemItem</li>
                <li>ItemItem</li>
                <li>ItemItem</li>
                <li>ItemItem</li>
                <li>ItemItem</li>
                <li>ItemItem</li>
                <li>ItemItem</li>
                <li>ItemItem</li>*/