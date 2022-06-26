import React, { useState, useRef, useEffect } from 'react';

import Icon from '../../shared/Icon';
import NavDarkLight from './NavDarkLight'
import NavLanguage from './NavLanguage'
import NavMessage from './NavMessage'
import NavNotification from './NavNotification'
import NavSearch from './NavSearch';
import NavSetting from './NavSetting';
import NavUser from './NavUser'

function HeaderRight({moodTheme, showDarkClass}) {
   const refMenu = useRef();
   const [showMore, setShowMore] = useState(false);
   const showMoreClass = showMore ? "show" : "";
   const onMoreCollapse = () => setShowMore(!showMore);
   const trackMore = (e) => {
      if (refMenu.current.contains(e.target)) {
        // inside scope click
        return
      }
      // outside scope click
      setShowMore(false)
   }
   useEffect(() => {
      document.addEventListener('click', trackMore)
      return () => {
        document.removeEventListener('click', trackMore)
      }
   }, []);

   const refSearch = useRef();
   const [showSearch, setShowSearch] = useState(false);
   const showSearchClass = showSearch ? "show" : "";
   const onSearchCollapse = () => setShowSearch(!showSearch);

   const trackSearch = (e) => {
      if (refSearch.current.contains(e.target)) {
        // inside scope click
        return
      }
      // outside scope click
      setShowSearch(false)
   }
   useEffect(() => {
      document.addEventListener('click', trackSearch)
      return () => {
        document.removeEventListener('click', trackSearch)
      }
   }, [])

  return (
    <div className="nav-right-wrap">
      <div ref={refSearch} className="mobile-search"> 
         <button className="mobile-search-icon" onClick={onSearchCollapse}>
         {showSearch ? ( <Icon name="search-out" className="icon s-icon"/>):( <Icon name="search" className="icon"/>)}
         </button>
         <ul className="mobile-search-wrap">
            <NavSearch 
            showSearchClass={showSearchClass}
            />
         </ul>
      </div>
      <div ref={refMenu}>
         <button className="mobile-more-icon" onClick={onMoreCollapse}>
            {showMore? (<Icon name="cross" className="icon"/>):(<Icon name="more" className="icon"/>)}
         </button>
         <ul className={`nav-right-list ${showMoreClass}`}>
            <NavLanguage/>
            <NavDarkLight
            moodTheme={moodTheme} 
            showDarkClass={showDarkClass}
            />
            <NavMessage/>
            <NavNotification/>
            <NavUser/>
            <NavSetting/>
         </ul>
      </div>
   </div>
  )
}

export default HeaderRight