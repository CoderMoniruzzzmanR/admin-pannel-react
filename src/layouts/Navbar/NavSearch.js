import React from 'react'
import Icon from '../../shared/Icon';

function NavSearch() {
  return (
    <li className="nav-search">
      <div className="search-wrap">
         <form>
            <div className="form-group">
               <input className='search-input form-control' type="search" placeholder='search...' />
               <button className="search-button"><Icon name="search" className="icon"/></button>
            </div>
         </form>
      </div>
    </li>
  )
}

export default NavSearch