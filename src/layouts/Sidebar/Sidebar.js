import React, { useState } from 'react';
import {Link, useLocation } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import { CSSTransition } from 'react-transition-group';
import { ARouter } from "../../routes";
import { Nav, Badge, Button, Accordion, Navbar } from 'react-bootstrap';
import Logo from '../../components/Logo';
import LogoImg from "../../assets/img/logo4.svg";
// import SidebarFooter from './SidebarFooter';
import Icon from '../../shared/Icon';

function Sidebar() {
   const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
   const { eventKey, title, icon, children = null } = props;
   const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

   return (
     <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
       <Accordion.Item eventKey={eventKey}>
         <Accordion.Button as={Nav.Link}>
           <span>
             <span className="group-icon">{icon}</span>
             <span className="group-text">{title}</span>
             <span className="arrow"><Icon name="cheveron-right" className="icon"/></span>
           </span>
         </Accordion.Button>
         <Accordion.Body className="multi-menu">
           <Nav className="flex-column">
             {children}
           </Nav>
         </Accordion.Body>
       </Accordion.Item>
     </Accordion>
   );
 };

 const NavItem = (props) => {

   const { title, link, external, target, icon, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
   const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
   const navItemClassName = link === pathname ? "active" : "";
   const linkProps = external ? { href: link } : { as: Link, to: link };

   return (
     <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
       <Nav.Link {...linkProps} target={target} className={classNames}>
         <span>
           <span>{icon}</span>
           <span className="sidebar-text">{title}</span>
         </span>
         {badgeText ? (
           <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
         ) : null}
       </Nav.Link>
     </Nav.Item>
   );
 };


  return (
   <>
      {/* Mobile Navigation */}
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
         <Navbar.Brand className="me-lg-5" as={Link} to={ARouter.DashboardOverview.path}>
            <Logo 
               className="applogo img-fluid"
               src ={LogoImg}
               alt = "sidebar logo"
               width = "40"
               height = "60"
            />
         </Navbar.Brand>
         <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
            {showClass? (<>hi</>) : (<span className="navbar-toggler-icon"/>)}
         </Navbar.Toggle>
      </Navbar>
      {/* Sidebar */}
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
         <SimpleBar className={`${showClass} collapse sidebar d-md-block text-white`}>
            {/* Sidebar Logo*/}
            <div className="sidebar-header">
               <div className='sidebar-logo'>
                  <Link to={ARouter.DashboardOverview.path}>
                     <Logo 
                     className="applogo img-fluid"
                     src ={LogoImg}
                     alt = "sidebar logo"
                     width = "120"
                     height = "60"
                     />
                  </Link>
               </div>
            </div>
            <div className="sidebar-inner">
               {/* Sidebar Menu*/}
               <Nav className="main-menu">

                  <NavItem title="Dashboard" link={ARouter.DashboardOverview.path} icon={<Icon name="home" className="icon"/>}/>
                 
                  <CollapsableNavItem eventKey="tables/" title="Tables" icon={<Icon name="table" className="icon"/>}>
                     <NavItem title="Bootstrap Table" link={ARouter.BootstrapTables.path} icon={<Icon name="circle" className="multi-menu-icon"/>}/>
                  </CollapsableNavItem>
                 
                  {/* <NavItem external title="Plugins" link="https://demo.themesberg.com/volt-pro-react/#/plugins/datatable" target="_blank" badgeText="Pro" icon="$" /> */}
                 
                  {/* <Dropdown.Divider className="my-3 border-indigo" /> */}
                  <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={<Icon name="cube" className="icon"/>}>
                     <NavItem title="Overview" link={ARouter.DocsOverview.path} icon={<Icon name="circle" className="multi-menu-icon"/>}/>
                     <NavItem title="Download" link={ARouter.DocsDownload.path} icon={<Icon name="circle" className="multi-menu-icon"/>}/>
                     <NavItem title="Quick Start" link={ARouter.DocsQuickStart.path} icon={<Icon name="circle" className="multi-menu-icon"/>}/>
                  </CollapsableNavItem>
                 
                  <CollapsableNavItem eventKey="user/" title="User Management" icon={<Icon name="user" className="icon"/>}>
                     <NavItem title="User" link={ARouter.UserList.path} icon={<Icon name="circle" className="multi-menu-icon"/>}/>
                  </CollapsableNavItem>
                 
                  <CollapsableNavItem eventKey="components/" title="Components" icon={<Icon name="cube" className="icon"/>}>
                     <NavItem title="Accordion" link={ARouter.Accordions.path} icon={<Icon name="circle" className="multi-menu-icon"/>}/>
                     <NavItem title="Alerts" link={ARouter.Alerts.path} icon={<Icon name="circle" className="multi-menu-icon"/>}/>
                     <NavItem title="Badges" link={ARouter.Badges.path} icon={<Icon name="circle" className="multi-menu-icon"/>}/>
                  </CollapsableNavItem>
                  
               </Nav>
            </div>
            {/* Sidebar Footer*/}
            {/* <SidebarFooter /> */}
         </SimpleBar>
      </CSSTransition>
   </>
  )
}

export default Sidebar