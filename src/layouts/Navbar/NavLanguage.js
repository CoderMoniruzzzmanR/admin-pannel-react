import React from 'react'
import Icon from '../../shared/Icon';
import {Dropdown} from 'react-bootstrap';

function NavLanguage() {
  return (
    <li>
      <Dropdown>
         <Dropdown.Toggle>
            <span><Icon name="usa" className="icon"/></span>
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

export default NavLanguage