import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className="footer-full">
      <div className="container-fluid">
         <div className="row">
            <div className="col-lg-12">
               <div className="footer-content">
                  <p>COPYRIGHT &copy; {new Date().getFullYear()} <Link to="/">ZENITH</Link>, All rights Reserved </p>
                  <p>Design &amp; Develop by <a href="https://www.facebook.com/DeveloperMoniruzzaman" target="_blank">DeveloperMoniruzzaman</a></p>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}
export default Footer