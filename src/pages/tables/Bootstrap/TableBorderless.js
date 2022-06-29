import React from 'react';
import {Table, Dropdown} from 'react-bootstrap';
import Icon from '../../../shared/Icon';

import img1 from '../../../assets/img/thumb1.png';
import img2 from '../../../assets/img/thumb2.png';
import img3 from '../../../assets/img/thumb3.jpg';
import img4 from '../../../assets/img/thumb4.png';



function TableBorderless() {
   return (
      <div className="card">
         <div className="card-header">
            <div className="table-title">
               <h4>Borderless</h4>
            </div>
         </div>
         <Table responsive borderless hover>
            <thead className="table-light">
               <tr>
                  <th>Compny</th>
                  <th>Paid</th>
                  <th>Due</th>
                  <th>Total Amount</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <img src={img1} alt="icon image" className="rounded-circle thumb-xs me-1"/>
                     <span>Marcent</span>
                  </td>
                  <td>$800</td>
                  <td>$227</td>
                  <td>$1072</td>
                  <td>
                     <Dropdown className="table-dropdown" align="down">
                        <Dropdown.Toggle 
                           id="dropdown-basic"
                           variant="borderless-dark"
                           bsPrefix="no-chevron"
                           size="sm"
                           className="icon-btn"
                        >
                           <Icon name="more"/> 
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ willChange: "transform" }} align="start">
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="eye"/></span>Details</Dropdown.Item>
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="edit"/></span>Update</Dropdown.Item>
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="delete"/></span>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </td>
               </tr>
               <tr>
                  <td>
                     <img src={img2} alt="icon image" className="rounded-circle thumb-xs me-1"/>
                     <span>SoftByte</span>
                  </td>
                  <td>$700</td>
                  <td>$500</td>
                  <td>$1200</td>
                  <td>
                     <Dropdown className="table-dropdown" align="down">
                        <Dropdown.Toggle 
                           id="dropdown-basic"
                           variant="borderless-dark"
                           bsPrefix="no-chevron"
                           size="sm"
                           className="icon-btn"
                        >
                           <Icon name="more"/> 
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ willChange: "transform" }} align="start">
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="eye"/></span>Details</Dropdown.Item>
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="edit"/></span>Update</Dropdown.Item>
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="delete"/></span>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </td>
               </tr>
               <tr>
                  <td>
                     <img src={img3} alt="icon image" className="rounded-circle thumb-xs me-1"/>
                     <span>FlexCorn</span>
                  </td>
                  <td>$500</td>
                  <td>$117</td>
                  <td>$617</td>
                  <td>
                     <Dropdown className="table-dropdown" align="down">
                        <Dropdown.Toggle 
                           id="dropdown-basic"
                           variant="borderless-dark"
                           bsPrefix="no-chevron"
                           size="sm"
                           className="icon-btn"
                        >
                           <Icon name="more"/> 
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ willChange: "transform" }} align="start">
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="eye"/></span>Details</Dropdown.Item>
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="edit"/></span>Update</Dropdown.Item>
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="delete"/></span>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </td>
               </tr>
               <tr>
                  <td>
                     <img src={img4} alt="icon image" className="rounded-circle thumb-xs me-1"/>
                     <span>ForkStar</span>
                  </td>
                  <td>$560</td>
                  <td>$240</td>
                  <td>$800</td>
                  <td>
                     <Dropdown className="table-dropdown" align="down">
                        <Dropdown.Toggle 
                           id="dropdown-basic"
                           variant="borderless-dark"
                           bsPrefix="no-chevron"
                           size="sm"
                           className="icon-btn"
                        >
                           <Icon name="more"/> 
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ willChange: "transform" }} align="start">
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="eye"/></span>Details</Dropdown.Item>
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="edit"/></span>Update</Dropdown.Item>
                           <Dropdown.Item href="#/"><span className="icon img-icon"><Icon name="delete"/></span>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                  </td>
               </tr>
            </tbody>
         </Table>
      </div>
   )
}

export default TableBorderless