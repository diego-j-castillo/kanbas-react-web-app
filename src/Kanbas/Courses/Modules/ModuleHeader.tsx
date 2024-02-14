import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function ModuleHeader() {
  return (
    <div className="flex-fill">
      <p className="text-end wd-course-header">
        <button className="btn btn-white override-bs" type="button" id="collapse-all-button">Collapse All</button>
        <button className="btn btn-white override-bs" type="button" id="view-progress-button"> View Progress</button>
        <span className="dropdown">
          <button className="btn btn-white override-bs dropdown-toggle" type="button" id="dropdownMenuButton">
            <FaCheckCircle className="text-success"/> Publish All
          </button>
        </span>
        <button className="btn btn-danger" type="button" id="module-button"> + Module</button>
        <button className="btn btn-white override-bs"><FaEllipsisV/></button>
      </p>
    </div>
  );
}
export default ModuleHeader;