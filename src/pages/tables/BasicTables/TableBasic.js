import React from 'react';
import {Table, Dropdown} from 'react-bootstrap';
import Icon from 'src/shared/Icon';

const TableBasic = () => {
   
  return (
      <div className="card">
         <div className="card-header">
            <div className="table-title">
               <h4>Basic Table</h4>
            </div>
         </div>
         <Table responsive hover>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>ACTIONS</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>mark@gmail.com</td>
                  <td>Admin</td>
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
                  <td>jacob@gmail.com</td>
                  <td>Developer</td>
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
                  <td>Larry the Bird</td>
                  <td>larry@gmail.com</td>
                  <td>Manager</td>
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
                  <td>Thornton</td>
                  <td>thornton@gmail.com</td>
                  <td>User</td>
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
export default TableBasic

{/* <button className="btn btn-borderless-dark btn-sm icon-btn" title='Archive'>
                           <Icon name="archive"/>
                        </button> */}