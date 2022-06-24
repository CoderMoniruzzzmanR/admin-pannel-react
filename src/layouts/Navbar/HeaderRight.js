import React, { useState } from 'react';

import Icon from '../../shared/Icon';
import NavDarkLight from './NavDarkLight'
import NavLanguage from './NavLanguage'
import NavMessage from './NavMessage'
import NavNotification from './NavNotification'
import NavSetting from './NavSetting';
import NavUser from './NavUser'

function HeaderRight({moodTheme, showDarkClass}) {
   const [show, setShow] = useState(false);
   
  return (
    <div className="nav-right-wrap">
      <button className="mobile-search-icon">
         <Icon name="search" className="icon"/>
      </button>
      <button className="mobile-more-icon">
         <Icon name="more" 
         className="icon"
         />
      </button>
      <ul className="nav-right-list">
         <NavLanguage/>
         <NavDarkLight
          moodTheme={moodTheme} 
          showDarkClass={showDarkClass}
         />
         <NavMessage/>
         <NavNotification/>
         <NavUser/>
         <NavSetting/>
      </ul>
   </div>
  )
}

export default HeaderRight