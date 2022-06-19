import React from 'react';
import Icon from '../../shared/Icon';
import NavDarkLight from './NavDarkLight'
import NavLanguage from './NavLanguage'
import NavMessage from './NavMessage'
import NavNotification from './NavNotification'
import NavSearch from './NavSearch'
import NavUser from './NavUser'

function HeaderLeft() {
  return (
    <>
      <div className="mobile-more-icon">
         <Icon name="more" 
         className="icon"
         />
      </div>
      <ul className="nav-right">
         <NavSearch/>
         <NavLanguage/>
         <NavDarkLight/>
         <NavMessage/>
         <NavNotification/>
         <NavUser/>
      </ul>
   </>
  )
}

export default HeaderLeft