import { Link } from "react-router-dom";
import "../../styles.css";
import {FaArrowAltCircleRight, FaBan, FaBell, FaBullhorn, FaCalendar, FaChartBar, FaDownload, FaRegCheckCircle, FaRegDotCircle, FaTimes} from "react-icons/fa";

function CourseStatus() {
  return (
    <div className="wd-sidebar">
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
      <div className="wd-course-header">To Do</div>
      <ul className="list-group">
        <li>
          <Link to=".">Grade A1 - ENV + HTML</Link>
          <FaTimes/><br/>
          <div className="wd-subtitle">100 points - Sep 18 at 11:59 pm</div>
        </li>
      </ul>
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
  );
};
export default CourseStatus;