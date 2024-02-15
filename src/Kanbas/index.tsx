import Nav from "../Nav";
import { Navigate, Route, Routes } from "react-router";
import "./styles.css";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <>
      <Nav/>
      <div className="d-flex">
        <div className="d-none d-sm-block">
          <KanbasNavigation/>
        </div>
        <div style={{ flexGrow: 1}}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses/>} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default Kanbas;