import React, { useState } from 'react'
import { Search } from 'react-bootstrap-icons'
import { useDebounce } from '../../hooks/useDebounce'
import {useSearch} from '../../data/queriesAndMutations'
import { search } from '../../data/api'

function SearchBar() {
  const [searchInput, setSearchInput] = useState()
  const debouncedValue = useDebounce(searchInput)

  const handleSubmit = (e) => {
    e.preventDefault()
    //const {data, isLoading, isError} = useSearch({q:debouncedValue})
    const data = search({q:debouncedValue})
    data? console.log(data): console.log('errrororrrr')
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className="search-bar-container">
            <Search/>
            <input type="search" className='search-bar-bar' placeholder='Search' onChange={setSearchInput}
            value={debouncedValue}/>
        </div>
    </form>
  )
}

export default SearchBar