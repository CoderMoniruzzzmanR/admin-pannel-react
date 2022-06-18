import React from 'react';
import {Routes,  Route} from "react-router-dom";
import { ARouter } from "../routes";

import DashboardOverview from "./pages/dashboard/DashboardOverview";
import DocsOverview from "./pages/documentation/DocsOverview";
import DocsDownload from "./pages/documentation/DocsDownload";
import DocsQuickStart from "./pages/documentation/DocsQuickStart";
import Accordion from "./pages/components/Accordion";
import Alerts from "./pages/components/Alerts";
import Badges from "./pages/components/Badges";
import BootstrapTables from "./pages/tables/BootstrapTables";

import Layouts from './../components/Layouts';


function HomePage(){
   return(
      <Routes>
         <Route element={<Layouts/>}>
            <Route exact path={ARouter.DashboardOverview.path} element={<DashboardOverview/>} />
            <Route path={ARouter.BootstrapTables.path} element={<BootstrapTables/>} />
            <Route path={ARouter.Accordions.path} element={<Accordion/>} />
            <Route path={ARouter.Alerts.path} element={<Alerts/>} />
            <Route path={ARouter.Badges.path} element={<Badges/>} />
            <Route path={ARouter.DocsOverview.path} element={<DocsOverview/>} />
            <Route path={ARouter.DocsDownload.path} element={<DocsDownload/>} />
            <Route path={ARouter.DocsQuickStart.path} element={<DocsQuickStart/>} />
         </Route>
      </Routes>
   )
}
export default HomePage