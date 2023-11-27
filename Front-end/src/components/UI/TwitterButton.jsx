import React from 'react'

function TwitterButton({Name='button', color, type}) {
  var colorClass
  color == 'blue' ? colorClass = 'button-blue':
  color == 'gray' ? colorClass = 'button-gray':
  color == 'white' ? colorClass = 'button-white':
  color == 'black' ? colorClass = 'button-black':''
  return (
    <button className={`twitter-button ${colorClass}`} type={type}>{Name}</button>
  )
}

export default TwitterButton