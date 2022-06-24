import React from 'react'
import Icon from '../../shared/Icon';
import CreateButton from './CreateButton';
import HeaderLeft from './HeaderLeft';
import MobileNav from './MobileNav';
import NavSearch from './NavSearch';
function Header({onToggleClick, showClass, basehref}) {
  return (
   <div className="navigation-full">
      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-12">
               <div className="toolbar-wrapper">
                  <ul className="nav-left">
                     <MobileNav onToggleClick={onToggleClick} showClass={showClass} basehref={basehref}/>
                     <CreateButton/>
                     <NavSearch/>
                  </ul>
                  <HeaderLeft/>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Header
