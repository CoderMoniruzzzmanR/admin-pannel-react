import React, { useState } from 'react';
import {Outlet} from "react-router-dom";
import Footer from './Footer/Footer';
import Header from './Navbar/Header';
import Sidebar from './Sidebar/Sidebar';
import { ARouter } from ".././routes";

export default () => {
   const [show, setShow] = useState(false);
   const [showDark, setShowDark] = useState(false);
   const showDarkClass = showDark ? "dark-theme" : "semi-light";
   const showClass = show ? "show" : "";
   const mainShowClass = show ? "collapase-in" : "collapase-out";

   const onCollapse = () => setShow(!show);
   const onMoodTheme = () => setShowDark(!showDark);

   return (
      <div className={`app ${showDarkClass}`}>
         <Sidebar showClass={showClass} show={show} onClickSet={() => setShow(false)}/>
         <div className={`wrapper min-vh-100 d-flex flex-column ${mainShowClass}`}>
            <Header 
               moodTheme={onMoodTheme} 
               showDarkClass={showDark}
               onToggleClick={onCollapse} 
               showClass={showClass} 
               basehref={ARouter.DashboardOverview.path}
            />
            <main className="main-content flex-grow-1">
               <Outlet/>
            </main>
            <Footer/>
         </div>
      </div>
   )
};

