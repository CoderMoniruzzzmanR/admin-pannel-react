import React from 'react'
import Icon from '../../shared/Icon';
import {Dropdown} from 'react-bootstrap';
import us from '../../assets/img/lang/us.svg';
import bd from '../../assets/img/lang/bd.svg';
import cn from '../../assets/img/lang/cn.svg';
import ind from '../../assets/img/lang/india.svg';
import france from '../../assets/img/lang/france.svg';

function NavLanguage() {
  return (
    <li className="nav-languge">
      <Dropdown>
         <Dropdown.Toggle>
            <div className="image-box">
               <img className="img-fluid" src={us} alt='hero image'/>
            </div>
            <div className="infos">
               <strong>Eng</strong>
            </div>
            <div className='arrow'>
               <Icon name="cheveron-down"/>
            </div>
         </Dropdown.Toggle>
         <Dropdown.Menu>
            <Dropdown.Item href="#/"><span className="icon img-icon"><img className="img-fluid" src={us} alt='hero image'/></span>United State</Dropdown.Item>
            <Dropdown.Item href="#/"><span className="icon img-icon"><img className="img-fluid" src={france} alt='hero image'/></span>France</Dropdown.Item>
            <Dropdown.Item href="#/"><span className="icon img-icon"><img className="img-fluid" src={bd} alt='hero image'/></span>Bangladesh</Dropdown.Item>
            <Dropdown.Item href="#/"><span className="icon img-icon"><img className="img-fluid" src={ind} alt='hero image'/></span>India</Dropdown.Item>
            <Dropdown.Item href="#/"><span className="icon img-icon"><img className="img-fluid" src={cn} alt='hero image'/></span>China</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
    </li>
  )
}

export default NavLanguage