import React, { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with Express JS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: 2, name: "NodeJS",
    description: "Weeks 9 and 10 over NodeJS", course: "CS4550",
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <input onChange={(e) => setAssignment({
        ...assignment, title: e.target.value})}
        value={assignment.title} type="text" />
      <button className="btn btn-primary" onClick={updateTitle}> 
        Update Title to: {assignment.title} </button>
      <button className="btn btn-primary" onClick={fetchAssignment}>
        Fetch Assignment </button>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}`}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title`}>
        Get Title
      </a>
      <h4>Modifying Object Properties</h4>
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-50" type="text"
        onChange={(e) => setAssignment({ ...assignment, 
          title: e.target.value })} />
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input className="form-control w-50" type="number"
        onChange={(e) => setAssignment({ ...assignment, 
          score: parseInt(e.target.value) })} />
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completion
      </a> <br/>
      <input className="form-check-input" type="checkbox" id="comp-check" 
        onChange={(e) => setAssignment({ ...assignment,
          completed: !assignment.completed})}/>
      <label className="form-label" htmlFor="comp-check">Completed?</label>
      <h4>Module Object</h4>
      <a className="btn btn-success" href={MODULE_URL}>
        Get Module
      </a>
      <a className="btn btn-success" href={`${MODULE_URL}/name`}>
        Get Name
      </a> <br/>
      <a className="btn btn-success" href={`${MODULE_URL}/name/${module.name}`}>
        Update Name
      </a>
      <input className="form-control w50" type="text"
        onChange={(e) => setModule({ ...module,
          name: e.target.value })} />
    </div>
  );
}
export default WorkingWithObjects;

