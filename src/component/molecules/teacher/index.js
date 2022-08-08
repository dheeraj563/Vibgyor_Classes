import React from 'react';

import "./teacher.css";

const Teacher = ({
    url,
    name,
    desc,
    index
}) =>{
  return (
  <div className={index%2 ===0 ? "teacherWrapper" : "teacherWrapperRevese"}>
    <img className='teacherImage' src={url} alt="appLogo..." />
    <div>
        <h1 className='teacherHeader'>
            {name}
        </h1>
        <div className='teacherDesc'>
            {desc}
        </div>
    </div>
  </div>
  );
}
export default Teacher ;