import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ARouter } from "./routes";

import Layouts from './layouts/Layouts';

import DashboardOverview from "./pages/dashboard/DashboardOverview";
import DocsOverview from "./pages/documentation/DocsOverview";
import DocsDownload from "./pages/documentation/DocsDownload";
import DocsQuickStart from "./pages/documentation/DocsQuickStart";
import Accordion from "./pages/components/Accordion";
import Alerts from "./pages/components/Alerts";
import Badges from "./pages/components/Badges";
import BasicTable from "./pages/tables/BasicTables";
import UserList from './pages/user/UserList';
import UserCreate from './pages/user/UserCreate';
import NotFound from './pages/NotFound';
import Chat from './pages/chat/Chat';

function App() {
  return (
    <>
      <Routes>
         <Route element={<Layouts/>}>
            <Route exact path={ARouter.DashboardOverview.path} element={<DashboardOverview/>} />
            <Route path={ARouter.basicTables.path} element={<BasicTable/>} />
            <Route path={ARouter.Accordions.path} element={<Accordion/>} />
            <Route path={ARouter.Alerts.path} element={<Alerts/>} />
            <Route path={ARouter.Badges.path} element={<Badges/>} />
            <Route path={ARouter.UserList.path} element={<UserList/>}/>
            <Route path={ARouter.UserCreate.path} element={<UserCreate/>} />
            <Route path={ARouter.DocsOverview.path} element={<DocsOverview/>} />
            <Route path={ARouter.DocsDownload.path} element={<DocsDownload/>} />
            <Route path={ARouter.DocsQuickStart.path} element={<DocsQuickStart/>} />
            <Route path={ARouter.ChatOverview.path} element={<Chat/>} />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
