import ModuleList from "./ModuleList";
import ModuleHeader from "./ModuleHeader";
function Modules() {
  return (
    <div>
      <ModuleHeader/>
      <div className="flex-fill">
        <ModuleList />
      </div>
    </div>
  );
}
export default Modules;

