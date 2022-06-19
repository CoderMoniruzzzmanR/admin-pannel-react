import React from 'react'
import Icon from '../../shared/Icon';
import CreateButton from './CreateButton';
import HeaderLeft from './HeaderLeft';
function Header() {
  return (
   <div className="navigation-full">
      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-12">
               <div className="toolbar-wrapper">
                  <ul className="nav-left">
                     <li className="menu-icon">
                        <button className="collape-btn">
                           <Icon name="menu"/>
                        </button>
                     </li>
                     <CreateButton/>
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
