import { Navigate, Route, Routes } from "react-router";
import Nav from "../Nav";
import Assignment3 from "./a3";

function Labs() {
  return (
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Navigate to="a3"/>}/>
          <Route path="/a3" element={<Assignment3 />}/>
        </Routes>
      </div>
  );
};
export default Labs;