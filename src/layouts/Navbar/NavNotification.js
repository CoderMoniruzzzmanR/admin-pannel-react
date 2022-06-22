import React from 'react';
import Icon from '../../shared/Icon';
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavNotification() {
  return (
    <li className="nav-notification">
      <Dropdown>
         <Dropdown.Toggle  className="icon-drop">
            <Icon name="notification" className="icon"/>
         </Dropdown.Toggle>
         <Dropdown.Menu>
            <div className="drop-heading">
               <h4>Notifications</h4>
               <div><Link to="/" className="badge-primary">6 New</Link></div>
            </div>
            <div className="drop-items">
               <Dropdown.Item href="#/">
               </Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="user"/></span>New User</Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="store"/></span>New product</Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="calendar"/></span>New event</Dropdown.Item>
            </div>
            <div className="drop-footer">
               <Dropdown.Item href="#/" className="btn-basic">
                  <span>View more<span className="icon"><Icon name="arrow-right"/></span></span>
               </Dropdown.Item>
            </div>
            
         </Dropdown.Menu>
      </Dropdown>
    </li>
  )
}

export default NavNotification