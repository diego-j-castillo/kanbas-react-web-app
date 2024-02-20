import React from "react";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../index.css";
import { FaCheckCircle, FaEllipsisV, FaNewspaper, FaPlus, FaPlusCircle } from "react-icons/fa";

function Assignments() {
  const { courseId } =  useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  
  return(
    <>
      {/* Assignment Buttons */}
      <div className="d-flex justify-content-between wd-course-header">
        <input className="form-control w-25" placeholder="Search for Assignments"/>
        <div></div>
        <span className="flex-shrink-1">
            <button className="btn btn-white override-bs"> <FaPlus/>Group</button>
          <button className="btn btn-danger">Assignment</button>
          <button className="btn btn-white override-bs"><FaEllipsisV/></button>
        </span>
      </div>
      {/* Assignment List */}
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> Assignments
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /> <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div className="d-flex">
                  <span className="d-flex flex-grow-1">
                    {/* icons on left */}
                    <div className="align-self-center"> 
                      <FaEllipsisV className="align-bottom me-2" />
                      <FaNewspaper className="me-2 text-success"/> 
                    </div>
                    {/* assignment text */}
                    <div>
                      <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </Link> <br/>
                      <span className="wd-subtitle">
                        <Link to={`/Kanbas/Courses/${courseId}/Modules`}>Multiple Modules </Link>
                         | DUE {assignment.dueDate} | {assignment.pts} pts
                      </span>
                    </div>
                  </span>
                  {/* icons on right */}
                  <div>
                    <FaCheckCircle className="text-success" /> <FaEllipsisV className="me-2" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;