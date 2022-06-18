import React from 'react'
function Logo(props) {
   const {className, alt, width, height, src} = props;
   return (
      <img 
         className={className}
         src={src}
         alt= {alt}
         width={width}
         height={height}
      />
   )
}
export default Logo