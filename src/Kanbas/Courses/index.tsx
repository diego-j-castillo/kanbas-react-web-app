import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "../styles.css";
import Modules from "./Modules";
import Home from "./Home";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  
  const { pathname } = useLocation();
  let pathParams = pathname.split('/');
  let courseHeader = "";
  for (let index = 4; index < pathParams.length; index++) {
    courseHeader += `> ${pathParams[index]}`;
  }

  return (
    <div>
      <div className="wd-course-header"><HiMiniBars3 /> {course?.number}.{course?._id} {course?.name} {courseHeader} </div>
      <div className="d-flex">
        <CourseNavigation />
        <div className="wd-column" style={{flexGrow : 1}}>
          <Routes>
            <Route path="/" element={<Navigate to="Home"/>} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;