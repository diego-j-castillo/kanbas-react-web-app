import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

type CourseType = { 
  _id: string, name: string, number: string, 
  startDate: string, endDate: string, image: string };

function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse } : {
    courses: CourseType[];
    course: CourseType;
    setCourse: (course: CourseType) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: () => void; 
  }
) {
  
  return (
    <div className="p-4">
      <h1>Dashboard</h1>  <hr />

      <h5>Course</h5>
      <input value={course.name} className="form-control wd-input" placeholder="Course Name"
        onChange={(e) => setCourse({...course, name: e.target.value})}/>
      <input value={course.number} className="form-control wd-input" placeholder="Course Number"
        onChange={(e) => setCourse({...course, number: e.target.value})}/>
      <input value={course.startDate} className="form-control wd-input" placeholder="Start Date"
        onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
      <input value={course.endDate} className="form-control wd-input" placeholder="End Date"
        onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
      <button className="btn btn-white wd-button" onClick={addNewCourse}>
        Add
      </button> <hr/>

      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                </Link>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}  
                  </Link>
                  <p className="card-text">{course.number}.{course._id} {course.name}</p>
                  <button className="btn btn-white wd-button"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                      Delete
                  </button>
                  <button className="btn btn-danger wd-button"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                      Edit
                  </button>
                  <button className="btn btn-success wd-button"
                    onClick={updateCourse}>
                      Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;