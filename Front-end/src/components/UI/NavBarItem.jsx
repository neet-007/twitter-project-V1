import React from 'react'
import { Bookmark, Cash, JournalText, People, Person, Twitter } from 'react-bootstrap-icons'

function NavBarItem({item}) {
  return (
    <div className='nav-bar-item'>
        {item == 'Person' ? <Person size={30}/> :
         item == 'Twitter' ? <Twitter size={30}/>:
         item == 'Lists' ? <JournalText size={30}/>:
         item == 'Bookmarks' ? <Bookmark size={30}/>:
         item == 'Communities' ? <People size={30}/>:
         item == 'Monetization' ? <Cash size={30}/>:''}
        {item}
    </div>
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