import React from 'react'
import {Dropdown} from 'react-bootstrap';
import Icon from '../../shared/Icon';

function CreateButton() {
  return (
    <>
      <li>
         <Dropdown>
            <Dropdown.Toggle>
               <span>Create <Icon name="cheveron-down"/></span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="check-square"/></span>New Task</Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="user"/></span>New User</Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="store"/></span>New product</Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="calendar"/></span>New event</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
      </li>
    </>
  )
}

export default CreateButton