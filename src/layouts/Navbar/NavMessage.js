import React from 'react'
import Icon from '../../shared/Icon';
import { Link } from 'react-router-dom';
function NavMessage() {
  return (
    <li className="nav-message">
      <Link to="/">
         <div  className="icon-drop">
            <Icon name="message" className="icon"/>
            <span className="unread"></span>
         </div>
      </Link>
    </li>
  )
}

export default NavMessage