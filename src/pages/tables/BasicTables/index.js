import React from 'react';
import ContentHeader from 'src/components/common/ContentHeader';
import TableBasic from './TableBasic';
import StripedTable from './StripedTable';
import BorderedTable from './BorderedTable';
import TableHeadLight from './TableHeadLight';
import TableBorderless from './TableBorderless';

const BreadcrumbItems = [
   {
      title : "Home",
      to : '#/',
   },
   {
      title : "Bootstrap Tables",
      to : '#/',
      active: true, 
   }
];
const pageTitle = "Bootstrap Tables";

const BootstrapTable = () => {
   return(
      <>
         <ContentHeader
            pageTitle={pageTitle}
            BreadcrumbItems={BreadcrumbItems}
         />
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12">
                  <TableBasic/>
                  <TableHeadLight/>
                  <StripedTable/>
                  <TableBorderless/>
                  <BorderedTable/>
               </div>
            </div>
         </div>
      </>
   )
}

export default BootstrapTable;