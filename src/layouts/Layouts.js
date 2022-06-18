import React from 'react'
import {Outlet} from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default () => {
  return (
    <>
      <Sidebar/>
      <div className="main-body">
         <Header/>
         <main className="main-content flex-grow-1">
            <Outlet/>
         </main>
         <Footer/>
      </div>
    </>
  )
};

