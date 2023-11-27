import React from 'react'
import { Bookmark, Cash, JournalText, People, Person, Twitter } from 'react-bootstrap-icons'
import { NavLink, useLocation } from 'react-router-dom'

function NavBarItem({item, route, className}) {
  const {pathname} = useLocation()
  const isActive = pathname === item
  return (
    <li >
        <NavLink className={`nav-bar-item ${className}`} to={route}>
        {item == 'Person' ? <Person size={30}/> :
         item == 'Twitter' ? <Twitter size={30}/>:
         item == 'Lists' ? <JournalText size={30}/>:
         item == 'Bookmarks' ? <Bookmark size={30}/>:
         item == 'Communities' ? <People size={30}/>:
         item == 'Monetization' ? <Cash size={30}/>:''}
        {item}
        </NavLink>
    </li>
  )
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