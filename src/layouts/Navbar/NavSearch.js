import React from 'react'
import Icon from '../../shared/Icon';

function NavSearch() {
  return (
    <li className="nav-search">
      <form>
         <div className="form-group">
            <input className='search-input form-control' type="search" placeholder='search...' />
            <button className="search-button"><Icon name="search" className="icon"/></button>
         </div>
      </form>
    </li>
  )
}

export default NavSearch