import React, { useState } from 'react';
import {Outlet} from "react-router-dom";
import Footer from './Footer/Footer';
import Header from './Navbar/Header';
import Sidebar from './Sidebar/Sidebar';
import { ARouter } from ".././routes";

export default () => {
   const [show, setShow] = useState(false);
   const showClass = show ? "show" : "";
   const onCollapse = () => setShow(!show);
   return (
      <div className="app semi-light">
         <Sidebar showClass={showClass} show={show} onClickSet={() => setShow(false)}/>
         <div className="wrapper min-vh-100 d-flex flex-column">
            <Header onToggleClick={onCollapse} showClass={showClass} basehref={ARouter.DashboardOverview.path}/>
            <main className="main-content flex-grow-1">
               <Outlet/>
            </main>
            <Footer/>
         </div>
      </div>
   )
};

