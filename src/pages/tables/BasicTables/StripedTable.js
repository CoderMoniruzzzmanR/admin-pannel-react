import React from 'react';
import {Table, Dropdown} from 'react-bootstrap';
import Icon from 'src/shared/Icon';

import img1 from 'src/assets/img/user/user1.png';
import img2 from 'src/assets/img/user/user2.png';
import img3 from 'src/assets/img/user/user5.png';
import img4 from 'src/assets/img/user/user4.png';
import img5 from 'src/assets/img/user/user3.png';
import { Link } from 'react-router-dom';

function StripedTable() {
   return (
      <div className="card">
         <div className="card-header">
            <div className="table-title">
               <h4>Striped Table</h4>
            </div>
         </div>
         <Table responsive striped>
            <thead className="table-light">
               <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Status</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>1</td>
                  <td>
                     <div className="d-flex align-items-center">
                        <img src={img1} alt="icon image" className="rounded thumb-sm me-2"/>
                        <div className="d-block">
                           <span className='t-bold d-block'>Beverlie Krabbe</span>
                           <small className='d-block'>@username</small>
                        </div>
                     </div>
                  </td>
                  <td>beverlie@example.com</td>
                  <td>(+1) 555 4444 868</td>
                  <td>
                     <div className="badge badge-warning">Pending</div>
                  </td>
                  <td>
                     <div className="table-btn-group">
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="eye"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="edit"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="delete"/></span>
                        </Link>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>2</td>
                  <td>
                     <div className="d-flex align-items-center">
                        <img src={img2} alt="icon image" className="rounded thumb-sm me-2"/>
                        <div className="d-block">
                           <span className='t-bold d-block'>Courtliff Krabbe</span>
                           <small className='d-block'>@username</small>
                        </div>
                     </div>
                  </td>
                  <td>Krabbe@example.com</td>
                  <td>(+1) 777 4444 868</td>
                  <td>
                     <div className="badge badge-secondary">Inactive</div>
                  </td>
                  <td>
                     <div className="table-btn-group">
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="eye"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="edit"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="delete"/></span>
                        </Link>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>3</td>
                  <td>
                     <div className="d-flex align-items-center">
                        <img src={img4} alt="icon image" className="rounded thumb-sm me-2"/>
                        <div className="d-block">
                           <span className='t-bold d-block'>Jacob Krabbe</span>
                           <small className='d-block'>@username</small>
                        </div>
                     </div>
                  </td>
                  <td>jacob@example.com</td>
                  <td>(+1) 222 4444 868</td>
                  <td>
                     <div className="badge badge-success">Active</div>
                  </td>
                  <td>
                     <div className="table-btn-group">
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="eye"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="edit"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="delete"/></span>
                        </Link>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>4</td>
                  <td>
                     <div className="d-flex align-items-center">
                        <img src={img3} alt="icon image" className="rounded thumb-sm me-2"/>
                        <div className="d-block">
                           <span className='t-bold d-block'>Karena Courtliff</span>
                           <small className='d-block'>@username</small>
                        </div>
                     </div>
                  </td>
                  <td>courtliff@example.com</td>
                  <td>(+1) 111 4444 868</td>
                  <td>
                     <div className="badge badge-danger">Disabled</div>
                  </td>
                  <td>
                     <div className="table-btn-group">
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="eye"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="edit"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="delete"/></span>
                        </Link>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>5</td>
                  <td>
                     <div className="d-flex align-items-center">
                        <img src={img5} alt="icon image" className="rounded thumb-sm me-2"/>
                        <div className="d-block">
                           <span className='t-bold d-block'>Alex Hunter</span>
                           <small className='d-block'>@username</small>
                        </div>
                     </div>
                  </td>
                  <td>alex@example.com</td>
                  <td>(+1) 999 4444 868</td>
                  <td>
                     <div className="badge badge-success">Active</div>
                  </td>
                  <td>
                     <div className="table-btn-group">
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="eye"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="edit"/></span>
                        </Link>
                        <Link to="#/">
                           <span className="icon img-icon"><Icon name="delete"/></span>
                        </Link>
                     </div>
                  </td>
               </tr>
            </tbody>
         </Table>
      </div>
   )
}

export default StripedTable