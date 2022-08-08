import React from 'react';

import "./fotterOptions.css";

const FooterOptions= ({
    title,
    links
}) =>{
  return (
  <div className='fotterOptionsWrapper'>
    <div className='fotterOptionsTitle'>
        {title}
    </div>
    {links.map(link => (
        <div className='fotterOptionslinks'>{link}</div>
    ))}
  </div>
  );
}
export default FooterOptions;