import React from 'react';
import {Table, Dropdown} from 'react-bootstrap';
import Icon from 'src/shared/Icon';
function TableHeadLight() {
   return (
      <div className="card">
         <div className="card-header">
            <div className="table-title">
               <h4>Table Head Options</h4>
            </div>
         </div>
         <Table responsive hover>
            <thead className="table-light">
               <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>ACTIONS</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>#824781</td>
                  <td>26/06/2022</td>
                  <td>$800</td>
                  <td><div className="badge badge-success">Approved</div></td>
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
                  <td>#924781</td>
                  <td>27/06/2022</td>
                  <td>$100</td>
                  <td><div className="badge badge-primary">Pending</div></td>
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
                  <td>#324781</td>
                  <td>28/06/2022</td>
                  <td>$500</td>
                  <td><div className="badge badge-danger">Rejected</div></td>
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
                  <td>#524781</td>
                  <td>29/06/2022</td>
                  <td>$600</td>
                  <td><div className="badge badge-success">Approved</div></td>
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

export default TableHeadLight