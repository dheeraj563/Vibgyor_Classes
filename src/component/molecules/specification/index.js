import React from 'react';

import "./specification.css";

const Specification= ({
    url,
    title,
    desc
}) =>{
  return (
  <div className='specificationWrapper'>
    <img className='specificationImg' src={url} alt="logo..." />
    <h2 className='specificationTitle'>{title}</h2>
    <div className='specificationDesc'>{desc}</div>
  </div>
  );
}
export default Specification;