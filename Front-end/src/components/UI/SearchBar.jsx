import React from 'react'
import { Search } from 'react-bootstrap-icons'

function SearchBar() {
  return (
    <form>
        <div className="search-bar-container">
            <Search/>
            <input type="search" className='search-bar-bar' placeholder='Search'/>
        </div>
    </form>
  )
}

export default SearchBar