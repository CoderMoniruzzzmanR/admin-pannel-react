import React from 'react';
import {Table} from 'react-bootstrap';
import Icon from '../../../shared/Icon';
function TableHeadLight() {
   return (
      <div className="card">
         <div className="card-header">
            <div className="table-title">
               <h4>Table Head Options</h4>
            </div>
         </div>
         <Table responsive>
            <thead className="table-light">
               <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
               </tr>
               <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
               </tr>
               <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
               </tr>
            </tbody>
         </Table>
      </div>
   )
}

export default TableHeadLight