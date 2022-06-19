import React from 'react'
import UserImg from "../../assets/img/user.jpg";
import { BsChevronExpand, BsPower, BsCheck2Square } from "react-icons/bs";
import { Dropdown } from 'react-bootstrap';
import { FiUser, FiSettings , FiMail} from "react-icons/fi";




function SidebarFooter() {
  return (
    <Dropdown className="user-drodown custom-drodown">
      <Dropdown.Toggle id="dropdown-button-user" className="sidebar-navbar-user">
         <div className="user">
            <div className="avatar">
               <img src={UserImg} alt="user.jpg" className="img-fluid"/>
               <span className="avatar-status-online"></span>
            </div>
            <div className="user-info">
               <h3>Paul Melone</h3>
               <span>Python Dev</span>
            </div>
         </div>
         <span className="expand-icon"><BsChevronExpand/></span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="shadow-lg drop-menu">
         <div className="drop-heading">
            <span>Quick Actions</span>
         </div>
         <div className="drop-items">
            <Dropdown.Item href="#/action-1">
              <span className="icon"><FiUser/></span>My Profile
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
               <span className="icon"><BsCheck2Square/></span>My Task
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <span className="icon"><FiMail/></span> Inbox
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <span className="icon"><FiSettings/></span> Setting
            </Dropdown.Item>
         </div>
         <div className="drop-footer">
            <Dropdown.Item href="#/">
               <span><BsPower className="icon mr-1"/>Sign Out</span>
            </Dropdown.Item>
         </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SidebarFooter