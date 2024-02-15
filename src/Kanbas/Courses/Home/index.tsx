import ModuleHeader from "../Modules/ModuleHeader";
import ModuleList from "../Modules/ModuleList";
import "../index.css"
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <div>
      <ModuleHeader/>
      <div className="d-flex">
        <div className="flex-fill">
          <ModuleList />
        </div>
        <div className="sm-none d-none d-lg-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
export default Home;

