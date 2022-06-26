import React from 'react';
import {Table} from 'react-bootstrap';
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
      </div>
   )
}

export default BorderedTable