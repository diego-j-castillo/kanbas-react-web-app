import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import "../styles.css";
import "./index.css"
import Modules from "./Modules";
import Home from "./Home";
import CourseHeader from "./CourseHeader";
import Assignments from "./Assignments";
import axios from "axios";
import { useState, useEffect } from "react";
const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
  const { courseId } = useParams();
  const COURSES_API = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  
  return (
    <div>
      <CourseHeader course={course}/>
      <div className="d-flex">
        <div className="d-none d-md-block wd-column">
          <CourseNavigation />
        </div>
        <div className="wd-column" style={{flexGrow : 1}}>
          <Routes>
            <Route path="/" element={<Navigate to="Home"/>} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;