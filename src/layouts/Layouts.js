import React from 'react'
import {Outlet} from "react-router-dom";
import Footer from './Footer/Footer';
import Header from './Navbar/Header';
import Sidebar from './Sidebar/Sidebar';

export default () => {
  return (
    <div className="app semi-light">
      <Sidebar/>
      <div className="wrapper min-vh-100 d-flex flex-column">
         <Header/>
         <main className="main-content flex-grow-1">
            <Outlet/>
         </main>
         <Footer/>
      </div>
    </div>
  )
};

