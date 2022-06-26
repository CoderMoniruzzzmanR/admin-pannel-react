import React from 'react'
import Icon from '../../shared/Icon';

function NavSetting() {
  return (
   <li>
      <button className="nav-setting">
      <Icon name="setting" 
      className="icon"
      />
      </button>
      <div className="setting-content"></div>
   </li>
  )
}
export default NavSetting