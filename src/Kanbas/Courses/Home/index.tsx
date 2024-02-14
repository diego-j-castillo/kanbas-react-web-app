import ModuleHeader from "../Modules/ModuleHeader";
import ModuleList from "../Modules/ModuleList";
import "../index.css"
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <div>
      <ModuleHeader/>
      <div className="d-flex">
        <ModuleList />
        <CourseStatus />
      </div>
    </div>
  );
}
export default Home;

