import React, { useState } from 'react';

import Logo from '../../components/Logo';
import CreateButton from './CreateButton';
import HeaderRight from './HeaderRight';
import MobileNav from './MobileNav';
import NavSearch from './NavSearch';
import LogoImg from "../../assets/img/logo-mobile.svg";
import {Link } from "react-router-dom";

function Header({moodTheme, showDarkClass, onToggleClick, showClass}) {
   const [show, setShow] = useState(false);
   
  return (
   <div className="navigation-full">
      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-12">
               <div className="toolbar-wrapper">
                  <ul className="nav-left">
                     <MobileNav 
                        onToggleClick={onToggleClick} 
                        showClass={showClass}
                     />
                     <CreateButton/> 
                     <NavSearch/>
                  </ul>
                  <div className="minipad-logo">
                  <Link to="/">
                     <Logo 
                     className="applogo img-fluid"
                     src ={LogoImg}
                     alt = "sidebar logo"
                     width = "120"
                     height = "60"
                     />
                  </Link>
                  </div>
                  <HeaderRight
                     moodTheme={moodTheme}
                     showDarkClass={showDarkClass}
                  />
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Header
