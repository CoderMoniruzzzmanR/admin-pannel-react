import React from 'react'
import Icon from '../../shared/Icon';

function MobileNav({onToggleClick, showClass}) {
  return (
    <li>
      <div className="menu-icon" aria-controls="main-navbar" onClick={onToggleClick}>
         {showClass? (<button className="collape-btn"><Icon name="menu"/></button>) : (<button className="collape-btn"><Icon name="menu"/></button>)}
      </div>
    </li>
  )
}

export default MobileNav
