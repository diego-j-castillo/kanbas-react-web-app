import { Link, useParams } from "react-router-dom";
import "../../styles.css";
import {FaArrowAltCircleRight, FaBan, FaBell, FaBullhorn, FaCalendar, FaChartBar, FaDownload, FaRegCheckCircle, FaRegDotCircle, FaTimes} from "react-icons/fa";
import db from "../../Database";

function CourseStatus() {
  const { courseId } =  useParams();
  const assignmentList = db.assignments.filter(
    (assignment) => assignment.course === courseId);

  return (
    <div className="wd-sidebar wd-column">
      {/* COURSE STATUS AND BUTTONS */}
      <div>
        <h3>Course Status</h3>
        <button className="btn btn-white override-bs" type="button">
            <FaBan/> Unpublish </button>
          <button className="btn btn-success" type="button">
            <FaRegCheckCircle/> Published </button> <br/><br/>
          <button className="btn btn-white override-bs" type="button">
            <FaDownload/> Import Existing Content </button> <br/>
          <button className="btn btn-white override-bs" type="button">
            <FaArrowAltCircleRight/> Import From Commons </button> <br/>
          <button className="btn btn-white override-bs" type="button">
            <FaRegDotCircle/> Choose Home Page </button> <br/>
          <button className="btn btn-white override-bs" type="button">
            <FaChartBar/> View Course Stream </button> <br/>
          <button className="btn btn-white override-bs" type="button">
            <FaBullhorn/> New Announcement </button> <br/>
          <button className="btn btn-white override-bs" type="button">
            <FaChartBar/> New Analytics </button> <br/>
          <button className="btn btn-white override-bs" type="button">
            <FaBell/> View Course Notifications </button> <br/>
      </div>
      {/* TO DO LIST */}
      <div>
        <div className="wd-course-header">To Do</div>
        <ul className="list-group">
          {assignmentList.map((assignment) => (
            <li>
              <div className="d-flex">
                <div className="flex-grow-1">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                  {assignment.title}
                </Link> <br/>
                <span className="wd-subtitle">{assignment.pts} points | {assignment.dueDate}</span>
                </div>
                <FaTimes/><br/>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* COMING UP */}
      <div>
        <div className="wd-course-header">
          Coming Up
          <span className="float-end wd-header-option">
            <FaCalendar/> <Link to="/Kanbas/Calendar">View Calendar</Link>
          </span>
        </div>
        <ul className="list-group">
          <li>
            <FaCalendar/> <Link to=".">Lecture CS4550.12631.202410 Sep 7 at 11:45am</Link>
            <div className="wd-subtitle">CS4550.12631.202410<br/>Sep 11 at 11:45am</div>
          </li>
          <li>
            <FaCalendar/> <Link to=".">Lecture CS4550.12631.202410 Sep 11 at 11:45am</Link>
            <div className="wd-subtitle">CS4550.12631.202410<br/>Sep 11 at 6:00pm</div>
          </li>
          <li>
            <FaCalendar/> <Link to=".">CS5610 06 SP23 Lecture Sep 11 at 6pm</Link>
            <div className="wd-subtitle">CS4550.12631.202410<br/>Sep 11 at 7:00pm</div>
          </li>
        </ul>  
      </div>
    </div>
  );
};
export default CourseStatus;