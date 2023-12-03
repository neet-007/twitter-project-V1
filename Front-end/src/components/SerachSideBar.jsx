import React from 'react'
import HighlightBox from './UI/HighlightBox'
import SearchBar from './UI/SearchBar'
import AdjustedProfileCard from './AdjustedProfileCard'

function SerachSideBar() {
  return (
    <section className='search-side-bar'>
      <SearchBar/>
      <HighlightBox Title='Trending' list={['Real Madrid', 'Liverpool', 'Donald Trump', 'US is TERROR']}/>
      <HighlightBox Title='Who to follow' list={[<AdjustedProfileCard username={'username'} mention={'mention'}/>, <AdjustedProfileCard username={'username'} mention={'mention'}/>, <AdjustedProfileCard username={'username'} mention={'mention'}/>]}/>
      <footer className='serach-footer'>
        <span>
          Terms of Service
        </span>
        <span>
          Privacy Policy
        </span>
        <span>
          Cookie Policy
        </span>
        <span>
          Accessibility
        </span>
        <span>
          Ads info
        </span>
        <span>
          More
        </span>
        <span>
          © 2023 X Corp.
        </span>
      </footer>
    </section>
  )
}

export default SerachSideBar