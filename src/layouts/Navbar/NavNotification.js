import React from 'react';
import Icon from '../../shared/Icon';
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import hero from '../../assets/img/user.jpg';


function NavNotification() {
  return (
    <li className="nav-notification">
      <Dropdown>
         <Dropdown.Toggle  className="icon-drop">
            <Icon name="notification" className="icon"/>
            <span className="unread"></span>
         </Dropdown.Toggle>
         <Dropdown.Menu>
            <div className="drop-heading">
               <h4>Notifications</h4>
               <div><Link to="/" className="badge-primary">2 Unread</Link></div>
            </div>
            {/*Scrollbar */}
            <SimpleBar className="drop-items">
               <div className='drop-item-inner'>
                  <Dropdown.Item href="#/" className="unread">
                     <div className="image-box icon-box">
                        <img className="img-fluid" src={hero} alt='hero image'/>
                     </div>
                     <div className="info">
                        <div className="title-name">
                           <h6>James bond</h6>
                           <span className="unread"></span>
                        </div>
                        <p>It will seem like simplified English..</p>
                        <span className="icon"><Icon name="time"/><small><span key="t-hours-ago">1 hours ago</span></small></span>
                     </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/" className="read">
                     <div className="image-box icon-box">
                        <span className="order"><Icon name="bag"/></span>
                     </div>
                     <div className="info">
                        <div className="title-name">
                           <h6>2500 order is placed</h6>
                        </div>
                        <p>It will seem like simplified English..</p>
                        <span className="icon"><Icon name="time"/><small><span key="t-hours-ago">3 hours ago</span></small></span>
                     </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/" className="unread">
                     <div className="image-box icon-box">
                        <span className="stock"><Icon name="stock-out"/></span>
                     </div>
                     <div className="info flex-grow-1">
                        <div className="title-name">
                           <h6>Limited Stock of products</h6>
                           <span className="unread"></span>
                        </div>
                        <p>It will seem like simplified English..</p>
                        <span className="icon"><Icon name="time"/><small><span key="t-hours-ago">3 hours ago</span></small></span>
                     </div>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/" className="read">
                     <div className="image-box icon-box">
                        <span className="product-add"><Icon name="store"/></span>
                     </div>
                     <div className="info">
                        <div className="title-name">
                           <h6>256, Products added Today</h6>
                        </div>
                        <p>It will seem like simplified English..</p>
                        <span className="icon"><Icon name="time"/><small><span key="t-hours-ago">3 hours ago</span></small></span>
                     </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/">
                     <div className="image-box icon-box">
                        <span className="task"><Icon name="task"/></span>
                     </div>
                     <div className="info">
                        <div className="title-name">
                           <h6>2 new task for you</h6>
                        </div>
                        <p>It will seem like simplified English..</p>
                        <span className="icon"><Icon name="time"/><small><span key="t-hours-ago">3 hours ago</span></small></span>
                     </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/">
                     <div className="image-box icon-box">
                        <span className="event"><Icon name="calendar"/></span>
                     </div>
                     <div className="info">
                        <div className="title-name">
                           <h6>Tomorrow Official Meeting at 11.00 AM</h6>
                        </div>
                        <p>It will seem like simplified English..</p>
                        <span className="icon"><Icon name="time"/><small><span key="t-hours-ago">3 hours ago</span></small></span>
                     </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/">
                     <div className="image-box icon-box">
                        <span className="delivered"><Icon name="delivered"/></span>
                     </div>
                     <div className="info">
                        <div className="title-name">
                           <h6>2500 item is shipped</h6>
                        </div>
                        <p>It will seem like simplified English..</p>
                        <span className="icon"><Icon name="time"/><small><span key="t-hours-ago">3 hours ago</span></small></span>
                     </div>
                  </Dropdown.Item>
               </div>
            </SimpleBar>
            <div className="drop-footer">
               <Dropdown.Item href="#/" className="btn-basic">
                  <span>View more<span className="icon"><Icon name="arrow-right"/></span></span>
               </Dropdown.Item>
            </div>
         </Dropdown.Menu>
      </Dropdown>
    </li>
  )
}

export default NavNotification