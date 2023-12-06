import React from 'react'

function TwitterButton({Name='button', color, type, onClick, form, className}) {
  var colorClass
  color == 'blue' ? colorClass = 'button-blue':
  color == 'gray' ? colorClass = 'button-gray':
  color == 'white' ? colorClass = 'button-white':
  color == 'black' ? colorClass = 'button-black':''
  return (
    <button className={`twitter-button ${colorClass} ${className}`} type={type} form={form} onClick={onClick}>{Name}</button>
  )
}

export default TwitterButton