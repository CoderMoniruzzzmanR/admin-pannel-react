import React from 'react'
import Icon from '../../shared/Icon';

function NavDarkLight({moodTheme, showDarkClass}) {
  return (
    <li>
      <button className="icon-drop" onClick={moodTheme}>
         {showDarkClass ? (<Icon name="sun" className="icon"/>):(<Icon name="moon" className="icon"/>)}
      </button>
    </li>
  )
}

export default NavDarkLight