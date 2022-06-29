import React from 'react';
import {Table, Dropdown} from 'react-bootstrap';
import Icon from '../../../shared/Icon';

function BorderedTable() {
   return (
      <div className="card basic-table">
         <div className="card-header">
            <div className="table-title">
               <h4>Bordered Table</h4>
            </div>
         </div>
         <div className="card-body">
            <Table responsive bordered>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Username</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>1</td>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
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
                     <td>2</td>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
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
                     <td>3</td>
                     <td colSpan={2}>Larry the Bird</td>
                     <td>@twitter</td>
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
                     <td>4</td>
                     <td>Alex</td>
                     <td>Hunter</td>
                     <td>@hun</td>
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
      </div>
   )
}

export default BorderedTable