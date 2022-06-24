import React from 'react'
import Icon from '../../shared/Icon';
import Dropdown from 'react-bootstrap/Dropdown';
import hero from '../../assets/img/user.jpg'

function NavUser() {
  return (
   <li className="nav-user">
      <Dropdown>
         <Dropdown.Toggle>
            <div className="image-box">
              <img className="img-fluid" src={hero} alt='hero image'/>
              <span className="active-badge"></span>
            </div>
            <div className="infos">
               <strong>Alex Hunter</strong>
               <span>Admin</span>
            </div>
            <div className='arrow'>
               <Icon name="cheveron-down"/>
            </div>
         </Dropdown.Toggle>
         <Dropdown.Menu>
            <div className="drop-heading">
               <h4>Quick Actions</h4>
            </div>
            <div className="drop-items">
               <Dropdown.Item href="#/"><span className="icon"><Icon name="user"/></span>My Profile</Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="task"/></span>My Task</Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="mail"/></span>Inbox</Dropdown.Item>
               <Dropdown.Item href="#/"><span className="icon"><Icon name="setting"/></span>Setting</Dropdown.Item>
            </div>
            <div className="drop-footer">
               <Dropdown.Item href="#/">
                  <span><span className="icon"><Icon name="logOut"/></span>Sign Out</span>
               </Dropdown.Item>
            </div>
         </Dropdown.Menu>
      </Dropdown>
    </li>
  )
}
export default NavUser