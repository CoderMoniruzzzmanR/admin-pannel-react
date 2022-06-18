import React from 'react'
import {Outlet} from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default () => {
  return (
    <div className="app">
      <Sidebar/>
      <div className="wrapper min-vh-100 d-flex flex-column bg-light">
         <Header/>
         <main className="main-content flex-grow-1">
            <Outlet/>
         </main>
         <Footer/>
      </div>
    </div>
  )
};

