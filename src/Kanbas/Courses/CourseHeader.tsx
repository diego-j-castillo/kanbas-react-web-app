import { useLocation, useParams } from "react-router";
import { courses } from "../Database";
import "./index.css"
import { FaBars, FaChevronDown, FaChevronRight, FaEye, FaGlasses } from "react-icons/fa";

function CourseHeader() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  
  const { pathname } = useLocation();
  let pathParams = pathname.split('/');

  return (
    <div>
      {/* Large Header */}
      <div className="wd-course-header d-none d-sm-block"> <FaBars/> 
        <span> {course?.number}.{course?._id} {course?.name} <FaChevronRight/> {pathParams[pathParams.length - 1]} </span>
        <button className="float-end btn btn-white override-bs">
          <FaGlasses/> Student View
        </button>
      </div>
      {/* Small Dark Header */}
      <div className="d-block d-sm-none"
        style={{"backgroundColor" : "black", "color" : "white", "padding" : "20px"}}>
        <span className="d-flex justify-content-between">
          <FaBars className="fs-2"/>
          <span>{course?.number}.{course?._id} {course?.name} <FaChevronRight/> {pathParams[pathParams.length - 1]}</span>
          <span> <FaEye className="fs-2"/> <FaChevronDown className="fs-2"/> </span>
        </span>
      </div>
    </div>
  );
}
export default CourseHeader;