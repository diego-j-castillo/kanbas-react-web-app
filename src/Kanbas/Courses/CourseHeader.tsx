import { useLocation } from "react-router";
import "./index.css"
import { FaBars, FaChevronDown, FaChevronRight, FaEye, FaGlasses } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import KanbasNavigation from "../Navigation";
import { useState } from "react";
import { CourseType } from "..";

function CourseHeader({course} : {course? : CourseType}) {
  
  const { pathname } = useLocation();
  let pathParams = pathname.split('/');

  const [navBread, setNavBread] = useState(false);
  const [courseBread, setCourseBread] = useState(false);

  return (
    <div>
      {/* Large Header */}
      <div className="wd-course-header d-none d-md-block"> <FaBars className="me-2"/>  
        <span> {course?.number}.{course?._id} {course?.name} <FaChevronRight/> {pathParams[pathParams.length - 1]} </span>
        <button className="float-end btn btn-white override-bs">
          <FaGlasses/> Student View
        </button>
      </div>
      {/* Small Dark Header */}
      <div className="d-block d-md-none">
        <span className="d-flex justify-content-between" style={{"backgroundColor" : "black", "color" : "white", "padding" : "20px"}}>
          <button className="btn text-white" onClick={(() => {setNavBread(!navBread); setCourseBread(false)})}>
            <FaBars className="fs-2"/>
          </button>  
          <span> {course?.number}.{course?._id} {course?.name} <FaChevronRight/> {pathParams[pathParams.length - 1]}</span>
          <span> 
            <FaEye className="fs-2"/> 
            <button className="btn text-white" onClick={(() => {setNavBread(false); setCourseBread(!courseBread)})}>
              <FaChevronDown className="fs-2"/>
            </button> 
          </span>
        </span>
        <div className={courseBread ? "d-md-none" : "d-none"}>
          {navBread} <CourseNavigation/>
        </div>
        <div className={navBread ? "d-md-none" : "d-none"}>
          <KanbasNavigation/>
        </div>
      </div>
    </div>
  );
}
export default CourseHeader;