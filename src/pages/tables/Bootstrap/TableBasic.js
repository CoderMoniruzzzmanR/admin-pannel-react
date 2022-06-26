import React from 'react';
import {Table} from 'react-bootstrap';
import Icon from '../../../shared/Icon';

const TableBasic = () => {
  return (
      <div className="card">
      <div className="card-header">
         <div className="table-title">
            <h4>Basic Table</h4>
         </div>
      </div>
      <Table responsive>
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
                  <div>
                     <Icon name="more"/>
                  </div>
               </td>
            </tr>
            <tr>
               <td>2</td>
               <td>Jacob</td>
               <td>Thornton</td>
               <td>@fat</td>
               <td>
                  <Icon name="more"/>
               </td>
            </tr>
            <tr>
               <td>3</td>
               <td>Larry the Bird</td>
               <td>Thornton</td>
               <td>@twitter</td>
               <td>
                  <Icon name="more"/>
               </td>
            </tr>
            <tr>
               <td>4</td>
               <td>Larry the Bird</td>
               <td>Thornton</td>
               <td>@twitter</td>
               <td>
                  <Icon name="more"/>
               </td>
            </tr>
         </tbody>
      </Table>
   </div>
  )
}
export default TableBasic

