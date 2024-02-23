import { useLocation, useParams } from "react-router";
import { courses } from "../Database";
import "./index.css"
import { FaBars, FaChevronDown, FaChevronRight, FaEye, FaGlasses } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import KanbasNavigation from "../Navigation";

function CourseHeader() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  
  const { pathname } = useLocation();
  let pathParams = pathname.split('/');

  return (
    <div>
      {/* Large Header */}
      <div className="wd-course-header d-none d-sm-block"> <FaBars className="me-2"/>  
        <span> {course?.number}.{course?._id} {course?.name} <FaChevronRight/> {pathParams[pathParams.length - 1]} </span>
        <button className="float-end btn btn-white override-bs">
          <FaGlasses/> Student View
        </button>
      </div>
      {/* Small Dark Header */}
      <div className="d-block d-sm-none">
        <span className="d-flex justify-content-between" style={{"backgroundColor" : "black", "color" : "white", "padding" : "20px"}}>
          <button className="btn text-white" data-bs-toggle="collapse" data-bs-target="#kanbasNavDrop">
            <FaBars className="fs-2"/>
          </button>  
          <span> {course?.number}.{course?._id} {course?.name} <FaChevronRight/> {pathParams[pathParams.length - 1]}</span>
          <span> 
            <FaEye className="fs-2"/> 
            <button className="btn text-white" data-bs-toggle="collapse" data-bs-target="#courseNavDrop">
              <FaChevronDown className="fs-2"/>
            </button> 
          </span>
        </span>
        <div className="collapse" id="courseNavDrop">
          <CourseNavigation/>
        </div>
        <div className="collapse" id="kanbasNavDrop">
          <KanbasNavigation/>
        </div>
      </div>
    </div>
  );
}
export default CourseHeader;