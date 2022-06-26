import React from 'react'
import Icon from '../../shared/Icon';

function NavSearch(props) {
   const {showSearchClass} = props;
   return (
      <li className={`nav-search ${showSearchClass}`}>
         <div className="search-wrap">
            <form>
               <div className="form-group">
                  <input className='search-input form-control' type="text" placeholder='search...' />
                  <button className="search-button"><Icon name="search" className="icon"/></button>
               </div>
            </form>
         </div>
      </li>
   )
}

export default NavSearch