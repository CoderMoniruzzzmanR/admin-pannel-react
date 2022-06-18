import React, { useState } from 'react';
import {Link, useLocation } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import { CSSTransition } from 'react-transition-group';
import { ARouter } from "../routes";
import { Nav, Badge, Button, Dropdown, Accordion, Navbar } from 'react-bootstrap';

import LogoImg from "../assets/img/logo.svg";
import Logo from '../components/Logo';


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
         <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
           <span>
             <span className="sidebar-icon"> </span>
             <span className="sidebar-text">{title}</span>
           </span>
         </Accordion.Button>
         <Accordion.Body className="multi-level">
           <Nav className="flex-column">
             {children}
           </Nav>
         </Accordion.Body>
       </Accordion.Item>
     </Accordion>
   );
 };

 const NavItem = (props) => {

   const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;

   const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
   const navItemClassName = link === pathname ? "active" : "";
   const linkProps = external ? { href: link } : { as: Link, to: link };

   return (
     <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
       <Nav.Link {...linkProps} target={target} className={classNames}>
         <span>
           <span>#</span>
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
      <div className={`${showClass} collapse sidebar d-md-block bg-primary text-white`}>
         {/* Sidebar Logo*/}
         <div className="sidebar-logo">
            <Logo 
               className="applogo img-fluid"
               src ={LogoImg}
               alt = "sidebar logo"
               width = "120"
               height = "60"
               />
         </div>
         <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
            <SimpleBar>
               <div className="sidebar-inner px-4 pt-3">
                  {/* Sidebar Menu*/}
                  <Nav className="flex-column pt-3 pt-md-0">

                     <NavItem title="Overview" link={ARouter.DashboardOverview.path} icon="$" />

                     <CollapsableNavItem eventKey="tables/" title="Tables" icon="$">
                        <NavItem title="Bootstrap Table" link={ARouter.BootstrapTables.path} />
                     </CollapsableNavItem>

                     <NavItem external title="Plugins" link="https://demo.themesberg.com/volt-pro-react/#/plugins/datatable" target="_blank" badgeText="Pro" icon="$" />
                     
                     <Dropdown.Divider className="my-3 border-indigo" />

                     <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon="$">
                        <NavItem title="Overview" link={ARouter.DocsOverview.path} />
                        <NavItem title="Download" link={ARouter.DocsDownload.path} />
                        <NavItem title="Quick Start" link={ARouter.DocsQuickStart.path} />
                     </CollapsableNavItem>

                     <CollapsableNavItem eventKey="user/" title="User Started" icon="$">
                        <NavItem title="User" link={ARouter.UserList.path} />
                     </CollapsableNavItem>

                     <CollapsableNavItem eventKey="components/" title="Components" icon="$">
                        <NavItem title="Accordion" link={ARouter.Accordions.path} />
                        <NavItem title="Alerts" link={ARouter.Alerts.path} />
                        <NavItem title="Badges" link={ARouter.Badges.path} />
                     </CollapsableNavItem>

                  </Nav>
               </div>
            </SimpleBar>
         </CSSTransition>
         {/* Sidebar Footer*/}
         <div>footer</div>
      </div>
   </>
  )
}

export default Sidebar