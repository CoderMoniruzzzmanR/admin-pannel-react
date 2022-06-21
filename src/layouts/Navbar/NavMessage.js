import React from 'react'
import Icon from '../../shared/Icon';
import {Dropdown} from 'react-bootstrap';

function NavMessage() {
  return (
    <li className="nav-message">
      <Dropdown>
         <Dropdown.Toggle  className="icon-drop">
            <Icon name="message" className="icon"/>
         </Dropdown.Toggle>
         <Dropdown.Menu>
            <Dropdown.Item href="#/"><span className="icon"><Icon name="check-square"/></span>New Task</Dropdown.Item>
            <Dropdown.Item href="#/"><span className="icon"><Icon name="user"/></span>New User</Dropdown.Item>
            <Dropdown.Item href="#/"><span className="icon"><Icon name="store"/></span>New product</Dropdown.Item>
            <Dropdown.Item href="#/"><span className="icon"><Icon name="calendar"/></span>New event</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
    </li>
  )
}

export default NavMessage