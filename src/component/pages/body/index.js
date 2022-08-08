import React from 'react';

import Teacher from "../../molecules/teacher";
import Specification from '../../molecules/specification';

import Image from "../../../assets/appImage.jpg";
import studentImage from "../../../assets/student.png";
import studentImageMobile from "../../../assets/studentMobile.png";

import { pdfList, specificationList, TeacherDetails } from "../../../utils";

import "./body.css";

const Body= () =>{
  return (
  <div className='bodyWrapper'>
    <img className='bodyLogoImage' src={Image} alt="appLogo..." />
    <div className='bodyAppName'>VIBGYOR</div>
    <img className='bodyStudentImage' src={studentImage} alt="student..." />
    {/* <img className='bodyStudentImageMobile' src={studentImageMobile} alt="student..." /> */}
    <img className='bodyStudentImageMobile' src="https://media.giphy.com/media/6D0dubMvJUtAA/giphy.gif" alt="student..." />
    
    
    <h1 className='bodySpecificationheader'>
        Why Vibgyor Classes ?
    </h1>
    <div className='bodySpecification'>
        {specificationList.map(item => (
            <Specification
                title={item.title}
                url={item.url}
                desc={item.desc}
            />
        ))}
    </div>
    <div className='ourTeachersWrapper'>
        <h1 className='ourTeachersHeader'>Our Teachers</h1>
        {TeacherDetails.map((item, index) => (
            <Teacher url={item.url} name={item.name} desc={item.desc} index={index} />
        ))}
    </div>
    <div className='studyMaterial'>
        <h1 className='ourTeachersHeader'>
            Study Material
        </h1>
        {pdfList.map(item => (
            <div className='studyMaterialpdf'>{item.name}</div>
        ))}
    </div>
  </div>
  );
}
export default Body;