import React from 'react'
import {Dropdown} from 'react-bootstrap';
import Icon from '../../shared/Icon';

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
                     <li>
                        <Dropdown>
                           <Dropdown.Toggle>
                              <span>Create <Icon name="cheveron-down"/></span>
                           </Dropdown.Toggle>
                           <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item href="#/action-3">Separated link</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                     </li>
                  </ul>
                  <ul className="nav-right">
                     <li>left side 
                        
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Header

{/* <Icon name="message" 
className="icon"
/>
<Icon name="notification" 
className="icon"
/>
<Icon name="setting" 
className="icon"
/>
<Icon name="more" 
className="icon"
/>

<Icon name="search" 
className="icon"
/>
<Icon name="user" 
className="icon"
/> */}