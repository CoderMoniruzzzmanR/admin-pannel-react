import React from 'react'
import {Breadcrumb} from 'react-bootstrap';
import {Link} from "react-router-dom";

function ContentHeader(props) {
   const {pageTitle=null, BreadcrumbItems=null } = props;
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-12">
               <div className="content-header">
                  <div className="page-title">
                     <h3>{pageTitle}</h3>
                  </div>
                 <div className="app-breadcrumb">
                     <Breadcrumb className="pro-breadcrumb">
                        {
                           BreadcrumbItems !== null ? 
                           <>
                              { BreadcrumbItems.map((items, index)=>{
                                 return(
                                    items.active?
                                       (<Breadcrumb.Item href="#/" key={index} active>{items.title}</Breadcrumb.Item>)
                                       : (<Breadcrumb.Item href="#/" key={index}>{items.title}</Breadcrumb.Item>)
                                 )
                              })}
                           
                           </> : <></>
                        }
                     </Breadcrumb>
                 </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default ContentHeader