import React from 'react'

function HighlightBox({Title='title', list=['aaaa', 'aaaa', 'aaaa', 'aaaa']}) {
  return (
    <article className='highlight-box'>
        <h3>{Title}</h3>
        <ul>
            {list.map(item => {
                return <li key={Math.random()}>{item}</li>
            })}
        </ul>
    </article>
  )
}

export default HighlightBox