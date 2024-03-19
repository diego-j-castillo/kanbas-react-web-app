import React, { useState, useEffect } from "react";
import "../index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaEdit } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {client.findModulesForCourse(courseId)
    .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  // handler functions
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule =  async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  // Module Operations
  const moduleList = (useSelector((state: KanbasState) => 
    state.modulesReducer.modules))
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  // const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <div>
      {/* New Module Input */}
      <button className="btn btn-danger" onClick={handleAddModule}>
        <FaPlus/> Add</button>
      <button className="btn btn-primary" onClick={handleUpdateModule}><FaEdit/> Update</button>
      <input className="form-control wd-input" value={module.name}
        placeholder="Module Name"
        onChange={(e) => dispatch(setModule({
          ...module, name: e.target.value }))}/>
      <textarea className="form-control wd-input" value={module.description}
        placeholder="Module Description"
        onChange={(e) => dispatch(setModule({
          ...module, description: e.target.value }))}/> <hr/>
      {/* List Items */}
      <ul className="list-group wd-modules">
        {moduleList.filter((module) => module.course === courseId).map((module) => (
          <li
            className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <button className="btn btn-success" onClick={() => dispatch(setModule(module))}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDeleteModule(module._id)}>Delete</button>
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;

