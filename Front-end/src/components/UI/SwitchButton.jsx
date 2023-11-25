import React from 'react'

function SwitchButton({Name, Selected, setSelectedTab}) {
  return (
    <button className={`switch-button
    ${Name == Selected ? 'switch-button-selected': ''}`}
    onClick={() => setSelectedTab(Name)}>
    {Name}</button>
  )
}

export default SwitchButton