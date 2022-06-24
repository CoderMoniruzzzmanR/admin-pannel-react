import React from 'react'
// import LogoImg from "../../assets/img/logo4.svg";
// import {Link} from "react-router-dom";
// import Logo from '../../components/Logo';
import Icon from '../../shared/Icon';

function MobileNav({onToggleClick, showClass, basehref}) {
  return (
    <li>
     {/* Mobile Navigation */}
      <div className="menu-icon" aria-controls="main-navbar" onClick={onToggleClick}>
         {showClass? (<button className="collape-btn"><Icon name="cross"/></button>) : (<button className="collape-btn"><Icon name="menu"/></button>)}
      </div>
    </li>
  )
}

export default MobileNav