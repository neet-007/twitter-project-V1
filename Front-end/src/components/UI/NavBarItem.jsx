import React from 'react'
import { Bookmark, Cash, DoorOpen, JournalText, People, Person, Twitter } from 'react-bootstrap-icons'
import { NavLink, useLocation } from 'react-router-dom'
import { logOut } from '../../data/api'

function NavBarItem({ item, route, className }) {
  const { pathname } = useLocation();
  const isActive = pathname === route; // Check if the current route matches the NavBarItem route
  const onClick = item == 'Logout' ? ()=>{logOut()}:''
  // Map items to corresponding icons
  const getIcon = (item) => {
    switch (item) {
      case 'Person':
        return <Person size={30} />;
      case 'Twitter':
        return <Twitter size={30} />;
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
      <NavLink className={`nav-bar-item ${className}`} to={route}
               onClick={()=>{onClick()}}>
        {getIcon(item)} {/* Render the corresponding icon */}
        {item}
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