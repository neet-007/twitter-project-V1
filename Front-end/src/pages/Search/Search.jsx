import React, {useState} from 'react'
import SwitchButtonContainer from '../../components/UI/SwitchButtonContainer'
import SwitchButton from '../../components/UI/SwitchButton'
import NavBarItem from '../../components/UI/NavBarItem'

function Search() {
  const SEARCH_TABS = ['For you', 'Trending', 'News', 'Sports', 'Entertaiment']
  const [SelectedTab, setSelectedTab] = useState('For you')
  return (
    <section>
        <SwitchButtonContainer>
            {SEARCH_TABS.map(tab => {
               return <SwitchButton Name={tab} Selected={SelectedTab} setSelectedTab={() => setSelectedTab(tab)}/>
            })}
        </SwitchButtonContainer>
        <ul className='moblie-side-nav-ul'>
            <li><NavBarItem item={'Trending'} className={'p-2'}/></li>
            <li><NavBarItem item={'Trending'} className={'p-2'}/></li>
            <li><NavBarItem item={'Trending'} className={'p-2'}/></li>
            <li><NavBarItem item={'Trending'} className={'p-2'}/></li>
            <li><NavBarItem item={'Trending'} className={'p-2'}/></li>
            <li><NavBarItem item={'Trending'} className={'p-2'}/></li>
        </ul>
    </section>
  )
}

export default Search